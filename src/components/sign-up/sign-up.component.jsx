import './sign-up.styles.scss';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords Do Not Match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email Already In Use');
                resetFormFields();
              }
            console.log('error encountered', error);
        }
    };

    return (
        <div className='sign-up-container'>
        <h2>Do Not Have An Account?</h2>
        <span>Sign Up With Your Email And Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="text" label= 'Display Name' required name='displayName' value={displayName} onChange={handleChange} />
                <FormInput type="email" label= 'Email' required name='email' value={email} onChange={handleChange} />
                <FormInput type="password" label= 'Password' required name='password' value={password} onChange={handleChange} />
                <FormInput type="password" label= 'Confirm Password' required name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                
                <Button type="submit">Sign Up</Button>
            </form>

        </div>
    );

}


export default SignUpForm;