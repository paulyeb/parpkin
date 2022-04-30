import SignIn from "../../components/Admin/UserAccount/SignIn";
import MetaData from "../../components/Layout/MetaData";

const AdminHomePage = () => {
    const isLoggedIn = false;

    return(
        <>
            <MetaData title={`Parpkin | Admin`} />
            {
            isLoggedIn ?
            <div>
                <div>
                    WELCOME ADMIN,
                </div>
                <p>This is how business is looking today...</p>
            </div> : <SignIn />
        }
        </>
    )
}

export default AdminHomePage;