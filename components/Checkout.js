import useCheckout from "../hooks/useCheckout";


const Checkout = () => {
    const {dataFromFlutterWave} = useCheckout();
    
    return (
        <div>{dataFromFlutterWave}</div>
    )
}

export default Checkout;