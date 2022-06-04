export default ({children}) => {
    return (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-30 z-10 w-full h-full">
            {children}
        </div>
    )
}