import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div className=" w-full h-screen text-center">
      <div className="flex max-w-[1240px] w-full h-full mx-auto p-2 justify-center  items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-400">
            LET'S BUILD SOMETHING
          </p>
          <h1 className="py-4 text-gray-600">
            Hi, I'm <span className="text-[#e49c15]">Gyamjo</span>
          </h1>
          <h1 className="py-4 text-gray-600">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto"></p>
          {/* Socials */}
          <div className="flex max-w-[330px] items-center justify-between m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <FaFacebook />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;