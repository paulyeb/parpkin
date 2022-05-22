const CartBackground = ({children}) => {
    return (
        <div className="container fixed relative bg-white shadow-2xl rounded-lg lg:w-2/5 h-auto">   
            {children}
        </div>    
    )
}

export default CartBackground;