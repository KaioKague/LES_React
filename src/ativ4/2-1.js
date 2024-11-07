import React from "react";

export default function Botoes(){
    return (
        <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUpload={()=> alert('Uploading!')}
        />
    );
}

function Toolbar({onPlayMovie, onUpload}){
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUpload}>
                Upload
            </Button>
        </div>
    );
}

function Button({onClick, children}){
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}