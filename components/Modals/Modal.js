const Modal = ({children}) => {
    return (
        <div className="container fixed relative bg-white shadow-2xl mt-14 rounded-lg lg:w-2/5 h-auto">
            {children}
        </div>
    )
}

export default Modal;