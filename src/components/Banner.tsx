import BannerImage from '../assets/banner-image.png'
import Button from './common/Button';

const Banner = () => {
   return (
     <div className="container mx-auto px-10 py-4 mt-16 mb-6">
       <div className="grid grid-cols-12 gap-4 bg-[#F4F6F5] p-8 rounded-2xl">
         {/* 45% */}
         <div className="col-span-5">
           <h1 className="font-black text-[48px] ">
             <p className="bg-white max-w-[50%] pl-2">LET’S</p>
             EXPLORE
             <p className="bg-[#ebd96b] max-w-[60%] pl-2">UNIQUE</p>
             COSMETICS.
           </h1>

           <p className='text-[#191818] mb-5'>Live for Influential and Innovative fashion!</p>

           <Button name='Shop Now'/>

         </div>

         {/* 55% */}
         <div className="col-span-7 ">
           <img
             src={BannerImage}
             alt="Banner Image"
             className="w-125 mx-auto"
           />
         </div>
       </div>
     </div>
   );
};

export default Banner;