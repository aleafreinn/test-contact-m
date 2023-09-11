const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex w-screen animate-breathe flex-col items-center justify-center bg-violet-600/[0.4] px-4 py-2 text-5xl backdrop-blur-sm">
        <p className="translate-x-[-5rem] text-xl">Alif Azib&apos;s</p>
        <h1 className="text-center font-semibold">Contain Your Contacts!</h1>
      </div>
      <p className=" max-w-2xl p-3 text-center">
        Welcome to{" "}
        <span className="text-amber-300">Contain Your Contacts!</span> This
        website aims to keep all your saved, important and favourite Contacts
        and it can be updated anytime that you want! <hr className=" m-4" />
        Bare in mind that this website is currently in development stage so
        expect some bugs that might occur. <br />
        Happy containing!
      </p>
    </>
  );
};

export default Header;
