import React from 'react'

export default function Button({title}) {
    return (
        <>
            <a className="btn bg-linear-to-r from-brand2 to-brand1 rounded-full text-white">
                {title}
            </a>
        </>
    )
}
