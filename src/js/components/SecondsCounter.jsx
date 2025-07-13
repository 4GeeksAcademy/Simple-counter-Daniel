import React from "react"

const DigitCounter = (props) => { 
    return(
    <div className="p-3 bg-secondary text-black border-danger- rounded-3 text-center p-5 fs-1 fw-bold">{props.tiempo} </div>
    )
    
}

const SecondsCounter = (props) => {
    return (
        <div className="container d-flex justify-content-center aling-items-center gap-2 mt-5" >
            <div className="p-5 bg-secondary text-black fs-1 fw-bold rounded-3 "><i class="fa-regular fa-clock"></i></div>
            <DigitCounter tiempo={Math.floor((props.seconds % 1000000) / 100000)}></DigitCounter>
            <DigitCounter tiempo={Math.floor((props.seconds % 100000) / 10000)}></DigitCounter>
            <DigitCounter tiempo={Math.floor((props.seconds % 10000) / 1000)}></DigitCounter>
            <DigitCounter tiempo={Math.floor((props.seconds % 1000) / 100)}></DigitCounter>
            <DigitCounter tiempo={Math.floor((props.seconds % 100) / 10)}></DigitCounter>
            <DigitCounter tiempo={Math.floor((props.seconds % 10) / 1)}></DigitCounter>
        </div>
    )
};

export default SecondsCounter