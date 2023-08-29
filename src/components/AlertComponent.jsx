import React from 'react'

export const AlertComponent = ({ message }) => {
    return (

        <div className="alert alert-dismissible alert-info">
            <span>{message}</span>
        </div>


    )
}
