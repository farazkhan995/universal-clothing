import './sign-in.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up.component';
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <>
        <h1>Hello This is a Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign In With Google</button>
        <SignUpForm />
        </>

    )
}

export default SignIn;