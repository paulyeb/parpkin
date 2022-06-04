import {useCheckout} from "../hooks";

const Checkout = () => {
    const {dataFromFlutterWave} = useCheckout();
    
    return (
        <div>{dataFromFlutterWave}</div>
    )
}

export default Checkout;