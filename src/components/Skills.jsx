import node from "../../public/images/skills/node.png";
import mongo from "../../public/images/skills/mongo.png";
import js from "../../public/images/skills/javascript.png";
import react from "../../public/images/skills/react.png";
import github from "../../public/images/skills/github.png";
import tailwind from "../../public/images/skills/tailwind.png";
import Image from "next/image";

const skillImages = [
  { name: node, title: "NodeJS" },
  { name: mongo, title: "MongoDB" },
  { name: js, title: "JavaScript" },
  { name: react, title: "ReactJs" },
  { name: tailwind, title: "TailwindCSS" },
  { name: github, title: "GitHub" },
];
const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl tracking-widest uppercase text-[#e49c15]">
          Skills
        </p>
        <h2 className="py-4 uppercase text-gray-500">
          Tech I am Familiar With
        </h2>
        {/* skills */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {skillImages.map((items, key) => (
            <div key={key}>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className=" flex justify-between gap-8 items-center">
                  <div className="m-auto">
                    <Image
                      src={items.name}
                      alt={items.title}
                      className="w-40 h-40"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="text-gray-500">{items.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
