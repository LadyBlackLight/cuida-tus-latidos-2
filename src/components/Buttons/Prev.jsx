import React from 'react'

export default function Prev(props) {
    return (
        <>
            {props.index === 0 || props.index === 8 ? '' : <button className={`button_${props.count}_prev`} onClick={props.handlePrevious}>
                Previous
            </button>}
        </>
    )
}
