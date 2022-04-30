import SignIn from "../../components/Admin/UserAccount/SignIn"
import MetaData from "../../components/Layout/MetaData";

const SignInPage = () => {
    return(
        <>
            <MetaData title={`Parpkin | Admin - Sign In`} />
            <SignIn />
        </>
    )
}

export default SignInPage;