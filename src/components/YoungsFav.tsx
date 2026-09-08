
import { IoIosArrowRoundForward } from "react-icons/io";
import Trending1 from "../assets/young-fav1.png";
import Trending2 from "../assets/young-fav2.png";

const YoungsFav = () => {
  return (
    <div className="container mx-auto mt-16 px-10 pb-4">
      <div >
        <h1 className="text-[32px] font-black">Young's Favourite</h1>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div>
          <img src={Trending1} alt="" className="mb-2" />
          <div className="flex justify-between items-end gap-4">
            <div>
              <div className="w-full h-6 overflow-hidden">
                <h3 className="font-semibold"> Trending on instagram</h3>
              </div>
              <a href="/" className="mb-2 text-[#7f7f7f] text-sm">
                Explore now!
              </a>
            </div>
            <div>
              <IoIosArrowRoundForward className="cursor-pointer text-2xl text-[#7f7f7f]" />
            </div>
          </div>
        </div>
        <div>
          <img src={Trending2} alt="" className="mb-2" />
          <div className="flex justify-between items-end gap-4">
            <div>
              <div className="w-full h-6 overflow-hidden">
                <h3 className="font-semibold">All Under $40</h3>
              </div>
              <a href="/" className="mb-2 text-[#7f7f7f] text-sm">
                Explore now!
              </a>
            </div>
            <div>
              <IoIosArrowRoundForward className="cursor-pointer text-2xl text-[#7f7f7f]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungsFav;
