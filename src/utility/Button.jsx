

export default function Button({ title, addStyle, title2, active, onClick }) {
    return (
        <>
            <button
                onClick={onClick}
                className={`btn rounded-full text-white border-none
                            transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95
                ${active ? "bg-success scale-105 shadow-md"
                        : "bg-linear-to-l from-brand2 to-brand1 hover:shadow-lg shadow-brand1/20"
                    } ${addStyle}`}
            >
                {active ? (
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {title2}
                    </span>
                ) : title}
            </button>
        </>
    )
}
