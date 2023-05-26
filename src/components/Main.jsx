import { Number } from "./Number"
import { Buttons } from "./Buttons"
import { useState } from "react"


export const Main = () => {
    const [counter, setCounter] = useState(0);

    const plus = () => {
        setCounter(counter + 3)
    }
    const minus = () => {
        if (counter > 1) {
            setCounter(counter - 2)
        }
    }
    const reset = () => {
        setCounter(0)
    }
    return (
        <main>
            <Number count={counter} />
            <Buttons plus={plus} minus={minus} reset={reset}/>
        </main>
    )
}