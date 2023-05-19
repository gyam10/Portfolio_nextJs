import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div>
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
  );
};

export default Social;
