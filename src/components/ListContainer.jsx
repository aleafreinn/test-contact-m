import {useState} from 'react'

const ListContainer = (props) => {
    const [showConfirmation, setShowConfirmation] = useState(false)
    const {id, name, email} = props.listContent;

    const confirmFunc = () => {
      setShowConfirmation(!showConfirmation);
    }

    const ConfirmContainer = () => {
        return (
            <>
                <h2>Are you sure you want to <span className='text-red-500'>delete</span> this contact?</h2>
                <div className="flex flex-row items-center">
                    <button onClick={() => props.removeFunc(id)} className=' border-green-800 text-green-500 text-sm px-2 py-1 m-2 hover:border-transparent hover:bg-green-500 hover:text-gray-800 transition-all duration-200 ease-in-out '>Yes</button>
                    <button onClick={() => setShowConfirmation(!showConfirmation)} className=' border-red-800 text-red-500 text-sm px-2 py-1 m-2 hover:border-transparent hover:bg-red-500 hover:text-gray-800 transition-all duration-200 ease-in-out '>No</button>
                </div>
            </>
        )
    }

    return (
        <div className='w-[95%] max-w-md box-border flex flex-col items-center  m-3 px-2 py-1 border-2 border-white rounded-lg bg-slate-700/[0.3]'>
            <div className="w-full flex flex-row justify-between items-center">
                <div>
                    <h1 className="font-bold">{name}</h1>
                    <h2 className=" text-amber-600 max-w-sm">{email}</h2>
                </div>
                <button onClick={confirmFunc} className=" border-red-800 text-red-500 text-sm px-2 py-1 m-2 hover:border-transparent hover:bg-red-500 hover:text-gray-800 transition-all duration-200 ease-in-out ">delete contact</button>
            </div>
            {showConfirmation ? <ConfirmContainer /> : ''}
        </div>
    )
}

export default ListContainer;