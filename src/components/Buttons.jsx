import { useDispatch } from "react-redux"




export const Buttons = () => {

const dispatch = useDispatch()


const handlePlus = () => {
    dispatch( {
        type: "plus"
    } )
}

const handleMinus = () => {
    dispatch( {
       type: "minus"
    } )
}

const handleReset = () => {
    dispatch( {
        type: "reset"
    } )
}

    return (
        <div className="buttons">
        <button className="blue-btn" onClick={handlePlus}>Увеличить</button>
        <button className="orange-btn" onClick={handleMinus}>Уменьшить</button>
        <button className="grey-btn" onClick={handleReset}>Сбросить</button>
        </div>
    )
}