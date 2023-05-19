import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, img, projectUrl, gitUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#e9a423] to-[#ebbd68]">
      <Link href={projectUrl} target="/blank">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={img}
          alt="/"
        />
      </Link>
      <div className="hidden group-hover:block absolute top-[20%] md:top-[30%] left-[50%] translate-x-[-50%]">
        <h3 className="text-lg  md:text-xl  text-white tracking-wider text-center mb-2 ">
          {title}
        </h3>
        <p className="text-center py-1 rounded-lg bg-white text-gray-600 font-bold text-sm md:text-lg cursor-pointer ">
          MERN
        </p>
        <Link href={gitUrl} target="/blank">
          <p className="text-gray-600 underline text-center py-2 text-sm md:text-lg">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
