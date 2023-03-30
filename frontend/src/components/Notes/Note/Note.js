import React from "react";

function Note(props) {
    return (
        <div className='note'>
            <p>{props.title}</p>
            <div className='description'>{props.body}</div>
            <button>edytuj</button>
            <button className="delete">usun</button>
        </div>
    );
}

export default Note;