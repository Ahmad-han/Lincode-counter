



export const Buttons = ({ plus, minus, reset }) => {
    return (
        <div className="buttons">
        <button className="blue-btn" onClick={plus}>Увеличить на 3</button>
        <button className="orange-btn" onClick={minus}>Уменьшить на 2</button>
        <button className="grey-btn" onClick={reset}>Сбросить</button>
        </div>
    )
}