import { request } from "../helpers"
import { useState } from "react";

export default () => {
    const [dataFromFlutterWave, setDataFromFlutterWave] = useState(null);
    const getCheckoutPage = (params) => {
        request.get('checkout', '', data => {
            setDataFromFlutterWave(data);
            console.log(data);
        }, params);
    }

    return {getCheckoutPage, dataFromFlutterWave};
}

