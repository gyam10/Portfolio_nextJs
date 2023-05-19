import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="flex max-w-[330px] items-center justify-between m-auto py-4">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
          <a
            href="https://www.linkedin.com/in/gyamjo-dong-421760246/"
            target="/blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
          <a href="https://github.com/gyam10" target="/blank">
            <FaGithub />
          </a>
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
          <a href="https://www.facebook.com/gyam.9" target="/blank">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
