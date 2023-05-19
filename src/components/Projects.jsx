import ProjectItem from "./ProjectItem";
import book from "../../public/images/projects/BookReader.png";
import imageGen from "../../public/images/projects/image-generator.png";
const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-[#e49c15] text-xl uppercase  tracking-widest py-12">
          Projects
        </p>
        <h2 className="py-4 text-gray-500 uppercase">Personal Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Project Items */}
          <ProjectItem
            title="Book Reader"
            img={book}
            projectUrl="https://iridescent-malabi-4fa77f.netlify.app"
            gitUrl="https://github.com/gyam10/BookReader"
          />
          <ProjectItem
            title="Image Generator"
            img={imageGen}
            projectUrl="https://image-generation.netlify.app"
            gitUrl="https://github.com/gyam10/Image-Generator"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
