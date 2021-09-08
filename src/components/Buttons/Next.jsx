import React from 'react'

export default function Next(props) {
    return (
        <>
            {props.index === 8 ? '' : <button className={`button_${props.count}_next`} onClick={props.handleNext}>
                Next
            </button>}
        </>
    )
}
