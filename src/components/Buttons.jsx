import { useDispatch } from "react-redux"
import { PlusOne, MinusOne, Reset } from "../Actions"




export const Buttons = () => {

const dispatch = useDispatch();

const handlePlus = () => {
    dispatch( PlusOne() )
}

const handleMinus = () => {
    dispatch( MinusOne() )
}

const handleReset = () => {
    dispatch( Reset() )
}

    return (
        <div className="buttons">
        <button className="blue-btn" onClick={handlePlus}>Увеличить</button>
        <button className="orange-btn" onClick={handleMinus}>Уменьшить</button>
        <button className="grey-btn" onClick={handleReset}>Сбросить</button>
        </div>
    )
}