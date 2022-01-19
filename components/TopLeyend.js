import { FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";


const TopLeyend = () => {
  return (
    <div className="flex justify-center md:justify-between pt-2 text-darkGray md:bg-lightGray">
      <div className="hidden md:flex px-12">
        <p className="text-sm font-extrabold tracking-widest my-auto uppercase">
         Hacemos realidad tus ideas
        </p>
      </div>
      <div>
        <div className="text-xl space-x-3 pr-6">
          <a
            href="https://www.facebook.com/Gini77o"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="go to my fabecook" alt="facebook-logo">
              <FaFacebook className="hover:text-blue-600" />
            </button>
          </a>
          
          
          <a
            href="mailto:gino.b.pietrobon@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiMail className="hover:text-dgreen" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLeyend;
