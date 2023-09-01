const Header = () => {
    return (
        <>
            <div className='w-screen sticky top-0 flex flex-col justify-center items-center text-5xl bg-violet-600/[0.4] backdrop-blur-sm px-4 py-2 animate-breathe'>
                <p className="text-xl translate-x-[-5rem]">Alif Azib&apos;s</p>
                <h1 className="text-center font-semibold">Contain Your Contacts!</h1>
            </div>
            <p className=' max-w-2xl text-center p-3'>
                Welcome to <span className="text-amber-300">Contain Your Contacts!</span> This website 
                aims to keep all your saved, important and favourite Contacts
                and it can be updated anytime that you want! <hr className=" m-4"/>Bare in mind that
                this website is currently in development stage so expect some
                bugs that might occur. <br />Happy containing!
            </p>
        </>
    )
};

export default Header