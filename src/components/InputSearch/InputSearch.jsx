import Search from '../../assets/Search.svg'

export default function InputSearch(){
    return(
    <>
        <form className="w-full h-full flex direction-row justify-start align-center">
            <input 
            type="search" 
            className="w-1/5 h-15 border-2 border-white border-opacity-40 bg-opacity-10 bg-white text-white p-1 mr-5 mt-5 ml-5 mb-5"></input>
            <img src={Search} className='w-7 cursor-pointer'></img>
        </form>
    </>
    )
}