import React, {useState} from "react";

function Welcome({text, color, random}){
    const [count, setCount] = useState(0);
    console.log(props);
    //view
    return(
        <div>
            hello world
            <p>
                Message tu component cha:
                <b>{props.message}</b>
            </p>
        </div>
    )
}
export default Welcome;


export const Goodbye = () => {
    return <div>Đây là component Goodbye</div>
}

