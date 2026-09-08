
import AppStore from '../assets/apple-store.png'
import PlayStore from '../assets/play-store.png'
import MobileIcon from '../assets/mobile-app.png'

const DownloadApp = () => {
   return (
     <div className="container mx-auto px-16 py-0 mt-10">
       <div className="grid grid-cols-2 gap-5 ">
         <div className="flex justify-center flex-col items-start gap-2 space-y-4">
           <h1 className="max-w-100 text-5xl font-bold">
             DOWNLOAD APP & GET VOUCHER
           </h1>
           <p className="max-w-75 font-normal text-[#7C7C7C]">
             Get 30% off for first transaction using Rondovision mobile app for
             now.
           </p>
           <div className='flex items-center gap-5'>
             <a href='/' className='cursor-pointer'>
               <img src={AppStore} alt="" className='w-36 h-auto'/>
             </a>
             <a href='/' className='cursor-pointer'>
               <img src={PlayStore} alt="" className='w-36 h-auto'/>
             </a>
           </div>
         </div>
         <div className="flex justify-center items-center">
           <img src={MobileIcon} alt="" className="w-75 h-auto" />
         </div>
       </div>
     </div>
   );
};

export default DownloadApp;