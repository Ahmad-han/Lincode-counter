import { useSelector } from "react-redux"





export const Number = () => {
    const count = useSelector((state) => state)


    return (
        <div className="number">
            <p>{count}</p>
        </div>
    )
}