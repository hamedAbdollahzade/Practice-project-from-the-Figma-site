import Slider from "./Slider";
import Frame48 from "../assets/Frame 48.png";
import Mahsulatma from "../assets/Mahsulatma.png";

export const Body = () => {
  return (
    <>
      {/* Body 1 */}
      <div className="flex justify-center">
        <img src={Frame48} alt="" />
      </div>

      {/* body 2 */}

      <div>
        <Slider />
      </div>

      {/* body 3 */}

      <div className="my-4 flex flex-col items-center text-3xl">
        <img src={Mahsulatma} alt="Mahsulatma" />
        <div className="w-80 h-14 relative">
          <div className="left-[199px] top-[31px] absolute text-right text-gray-800 text-xs font-normal font-['Vazir'] leading-7">
            برندهای ایرانی
          </div>
          <div className="left-[85px] top-[31px] absolute text-right text-gray-800 text-xs font-normal font-['Vazir'] leading-7">
            پر فروش ترین ها
          </div>
          <div className="w-80 h-px left-0 top-[60px] absolute border border-neutral-300"></div>
          <div className="w-24 h-px left-[164px] top-[58.80px] absolute origin-top-left rotate-180 border-2"></div>
        </div>
      </div>










      
    </>
  );
};
