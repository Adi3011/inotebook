import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const s1 = {
        "name": "note",
        "class": "Tech"
    }
    const [state,setState] = useState(s1);
    const updateState = () =>{
        setTimeout(() =>{
            setState({"name": "Tech Note created","class": "newTech"})
        },3000);
    };
    return (
        <NoteContext.Provider value ={{state,updateState}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;