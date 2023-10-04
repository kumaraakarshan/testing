import { useState } from "react";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false)

    const changedTextHandler = () => {
        setChangedText(true);
    }
    
    return (
        <div>
            <h2>
                Hello world
            </h2>
            {!changedText && <p>it's good to see you</p>}
            {changedText && <p> changed</p>}
            <button onClick={changedTextHandler}>Change Text</button>
        </div>
    )
}
export default Greeting;