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
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center mb-2 ">
          {title}
        </h3>
        <p className="text-center py-2 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer ">
          MERN
        </p>
        <Link href={gitUrl} target="/blank">
          <p className="text-gray-600 underline text-center py-2">More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
