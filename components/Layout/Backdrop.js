const Backdrop = ({children}) => {
    return (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-60 z-10 w-full h-full">
            {children}
        </div>
    )
}

export default Backdrop;