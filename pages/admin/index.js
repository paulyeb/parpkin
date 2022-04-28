import SignIn from "../../components/Admin/SignIn";

const AdminHomePage = () => {
    const isLoggedIn = false;

    return(
        <>
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