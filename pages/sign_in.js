import MetaData from "../components/Layout/MetaData";
import SignIn from "../components/UserAccount/SignIn"

const SignInPage = () => {
    return(
        <>
            <MetaData title={`Parpkin | Sign In`} />
            <SignIn />
        </>
    )
}

export default SignInPage;