import About from "../assets/About.png";
import Blog from "../assets/Blog.png";
import Mashaghel from "../assets/Mashaghel.png";
import Frame from "../assets/Frame 51.png";
import Logo from "../assets/Logo.png";
import SabadKharid from "../assets/sabad-Kharid.png";
import Profile from "../assets/Profile.png";
import Search from "../assets/Search.png";

export const Header = () => {
  return (
    <div className="p-3">
      {/* header 1 */}
      <div className="flex items-center  mx-3">
        <div className="flex flex-1">
          <img src={About} alt="About" />
          <img className="pr-3" src={Blog} alt="Blog" />
        </div>
        <div className="">
          <img src={Mashaghel} alt="Mashaghel" />
        </div>
      </div>

      {/* header 2*/}
      <div className="flex my-3 py-2 items-center border-y-2 ">
        <div className="flex flex-1">
          <img className="mx-2" src={Frame} alt="Frame" />
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex h-5">
          <img className="pl-2" src={SabadKharid} alt="SabadKharid" />
          <img className="pr-2 border-r-2" src={Profile} alt="Profile" />
        </div>
      </div>

      {/* header search */}
      <div className="flex justify-center">
        <input
          className="bg-[#E2E2E2] w-10/12 p-2 rounded-r-md outline-none "
          placeholder="نام محصول مورد نظر خود را جستجو کنید..."
          type="text"
        />
        <img
          className="p-3 bg-[#E2E2E2] rounded-l-md cursor-pointer"
          src={Search}
          alt="Search"
        />
      </div>
    </div>
  );
};
