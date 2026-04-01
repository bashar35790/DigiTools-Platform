import React from 'react'

export default function Button({title, addStyle}) {
    return (
        <>
            <a className={`btn bg-linear-to-l from-brand2 to-brand1 rounded-full text-white ${addStyle}`}>
                {title}
            </a>
        </>
    )
}
