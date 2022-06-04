export default ({heading, children}) => {
    return(
        <div className="container flex justify-start items-center sticky top-10 z-9 bg-white mt-10">
            <u className="h-10 text-3xl">{heading}</u>
            {children}
        </div>
    )
}