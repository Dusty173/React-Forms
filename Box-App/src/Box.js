import React from "react";

function Box({id, removeBox, width = 5, height = 5, backgroundColor = 'blue'}){
    const remove = () => removeBox(id)
    return (
        <div>
            <div style={{height: `${height}em`, width: `${width}em`, backgroundColor}}>

            </div>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;