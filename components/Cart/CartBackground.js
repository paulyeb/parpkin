const CartBackground = ({children}) => {
    return (
        <div className="container top-5 fixed relative bg-white shadow-2xl rounded-lg lg:w-2/5 h-auto overflow-auto">   
            {children}
        </div>    
    )
}

export default CartBackground;