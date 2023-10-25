export default function ButtonTop({ onClick, buttonText }) {
    return (
        <>
            <div className="flex justify-center">
                <button onClick={onClick} className="text-white font-bold ml-5 bg-gray-800 p-3 rounded-lg mb-4"> {buttonText} </button>
            </div>
        </>
    )
}