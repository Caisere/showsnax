import React from 'react'
import { useState } from 'react';
import Button from './Button';

function Box ({children}){
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="box">
            <Button
                onClick={() => setIsOpen((open) => !open)}
                className={"btn-toggle"}
            >
            {isOpen ? "–" : "+"}
            </Button>
            {isOpen ? children : <h1 style={{display: "grid", placeItems: "center", height: "70vh"}}>Click the + button to see list of result</h1>}
        </div>
    );

}

export default Box