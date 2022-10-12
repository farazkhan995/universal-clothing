import { AuthenticationContainer } from './authentication.styles.jsx';
import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in/sign-in.component';

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>

    )
}

export default Authentication;