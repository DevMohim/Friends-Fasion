
import PayDay from '../assets/payday-image.png'
import Button from './common/Button';

const DiscountSection = () => {
   return (
     <div className="bg-[#F9DD55] container mx-auto mt-16">
       <div className="grid lg:grid-cols-2 gap-5 items-center">
         <div className="flex justify-center ">
           <img src={PayDay} alt="A Girl Photo" />
         </div>
         <div className="p-7 text-center lg:text-left">
           <h1 className="text-5xl font-black mb-5">
             <span className="bg-white px-3">PAYDAY</span>
             <p className="mt-3">SALE NOW</p>
           </h1>
           <p className="max-w-[80%] font-medium text-[#231300] mb-8">
             Spend minimal $100 get 30% off voucher code for your next purchase
           </p>
           <p className='font-semibold '>1 June - 10 June 2021</p>
           <p className='mb-10'>*Terms & Conditions apply</p>
           <Button name="SHOP NOW" />
         </div>
       </div>
     </div>
   );
};

export default DiscountSection;