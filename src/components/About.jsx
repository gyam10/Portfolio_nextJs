import me from "../../public/images/myself.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex w-full md:h-screen p-2 items-center py-14">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#e49c15] px-2">
            About
          </p>
          <p className="py-4 px-2 text-gray-500 ">
            Hi, I am a skilled MERN stack web developer specializing in building
            robust web applications. With expertise in MongoDB, Express.js,
            React.js, and Node.js, I create efficient and scalable solutions. I
            have done Engineering in Computer Science.I excel in front-end and
            back-end development, delivering exceptional user experiences and
            seamless functionality. I love working on new and exciting
            technologies emerging nowadays. I have a keen interest in Web
            Development and I am always looking for new opportunities to learn
            and grow. Let's collaborate and bring your web project to life!
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-400 ">
          <Image
            className="rounded-xl"
            src={me}
            alt="me"
            width="450"
            height="350"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
