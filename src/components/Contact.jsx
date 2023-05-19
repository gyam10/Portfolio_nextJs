import Image from "next/image";
import Social from "./Social";
import contact from "../../public/images/contact.jpg";
import { InputBox, TextArea } from "./Form";
import Link from "next/link";
import { RxThickArrowUp } from "react-icons/rx";

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
                  src={contact}
                  alt="contact"
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
          {/* Right Form Side */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="P-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <InputBox type="text" title="Name" />
                  <InputBox type="text" title="Phone Number" />
                </div>
                <InputBox type="email" title="Email" />
                <InputBox type="text" title="Subject" />
                <TextArea title="Message" />
                <button className="w-full p-4 texxt-gray-300 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-12">
          <Link href="/">
            <div className="rounded-full shadow-xl shadow-gray-300 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <RxThickArrowUp size={25} className="text-[#e49c15]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
