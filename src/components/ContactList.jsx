import ListContainer from './ListContainer'

const ContactList = (props) => {
    const totalList = props.globalList.map((list) => {
        return (
            <>
                <ListContainer key={list.id} listContent={list} removeFunc={(id) => props.removeFunc(id)}/>
            </>
        )
    })

    return (
        <>
            <section className='flex flex-col items-center mt-8'>
                <hr className='w-screen'/><hr className='w-screen mt-1'/>
                <header className='text-2xl font-bold text-white/[0.8] m-5 px-4 py-2 border-0 rounded-lg bg-violet-600 shadow-[0px_15px_40px_-5px_rgba(139,92,246,1)] shadow-violet-400'>Saved Contacts</header>
                <h2 className='p-3 text-lg text-center'>All of the contacts that were added will be showed below.</h2>
                {totalList}
            </section>
        </>
    )
};


export default ContactList;