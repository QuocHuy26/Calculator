import { useContext, useEffect } from "react";
import { GlobalState } from "../context/GlobalState";

const Screen = () =>{
    const {expression, result} = useContext(GlobalState);

    useEffect(() => {
        console.log(expression)
    }, [expression, result]);

    return (
        <div className="screen">
            <div className="expression">
                <p>{expression}</p>
            </div>
            <div className="result">
                <p>{result}</p>
            </div>
        </div>
    );
}

export default Screen;