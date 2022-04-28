const Backdrop = ({children}) => {
    return (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-40 w-full h-full">
            {children}
        </div>
    )
}

export default Backdrop;