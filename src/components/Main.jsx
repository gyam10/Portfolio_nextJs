import Social from "./Social";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className="flex max-w-[1240px] w-full h-full mx-auto p-2 justify-center  items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-400">
            LET&apos;S BUILD SOMETHING
          </p>
          <h1 className="py-4 text-gray-600">
            Hi, I&apos;m <span className="text-[#e49c15]">Gyamjo</span>
          </h1>
          <h1 className="py-4 text-gray-600">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto"></p>
          {/* Socials */}
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Main;
