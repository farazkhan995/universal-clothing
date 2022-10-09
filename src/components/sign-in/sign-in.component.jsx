import './sign-in.styles.scss';
import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: ''
};


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong Password')
                    break;
                case 'auth/user-not-found':
                    alert('User Not Found')
                    break;
                default: console.log('error encountered', error);
                    break;
            }
            resetFormFields();

        }
    };
    const logGoogleUser = async () => {
        await signInWithGooglePopup();

    };
    return (
        <div className='sign-in-container'>
            <h2>Already Have An Account?</h2>
            <span>Sign In With Your Email And Password</span>

            <form onSubmit={handleSubmit}>

                <FormInput type="email" label='Email' required name='email' value={email} onChange={handleChange} />
                <FormInput type="password" label='Password' required name='password' value={password} onChange={handleChange} />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={logGoogleUser} buttonType='google'>Sign In With Google</Button>
                </div>

            </form>

        </div>
    );

}


export default SignInForm;




// <label>Email</label>
//                 <input type="email" required name='email' value={email} onChange={handleChange} />
//                 <label>Password</label>
//                 <input type="password" required name='password' value={password} onChange={handleChange} />
//                 <label>Confirm Password</label>
//                 <input type="password" required name='confirmPassword' value={confirmPassword} onChange={handleChange} />