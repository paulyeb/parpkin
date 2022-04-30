import MetaData from "../components/Layout/MetaData";
import CreateAccount from "../components/UserAccount/CreateAccount"

const CreateAccountPage = () => {
    return(
        <>
            <MetaData title={`Parpkin | Sign Up`} />
            <CreateAccount />
        </>
    )
}

export default CreateAccountPage;