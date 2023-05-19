import Image from "next/image";
import Social from "./Social";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#e49c15]">
          Contact
        </p>
        <h2 className="text-gray-500">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-300 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={""}
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2 text-[#e49c15]">Gyamjo Dong</h2>
                <p className="text-gray-400 py-2">Full-Stack Web Developer</p>
                <p className="py-3 text-gray-500">
                  I am available for freelance or full-time positioin. Contact
                  me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase text-gray-500 pt-8">Connect me with</p>
              </div>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
