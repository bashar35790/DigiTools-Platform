import React, { useState } from 'react'


export default function Button({ title, addStyle, title2 }) {
    const [active, setActive] = useState(false);
    return (
        <>
            <button
                onClick={() => setActive(!active)}
                className={`btn rounded-full text-white ${addStyle}
                            transition-all duration-300 ease-in-out
                ${active ? "bg-[#0A883E]"
                        : "bg-linear-to-l from-brand2 to-brand1"
                    }`}
            >
                {active ? title2 : title}
            </button>
        </>
    )
}
