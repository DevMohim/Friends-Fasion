import { IoIosArrowRoundForward } from "react-icons/io";
import type { ProductType } from "../types"


export interface NewArrivalProps {
   product: ProductType
}

export default function NewArrival({ product }: NewArrivalProps) {
   const {images, title } = product
   
   return (
     <div className="shadow-2xl shadow-gray-300 border border-gray-300 rounded-md p-4 space-y-2">
       <img src={images[0]} alt={title} className="w-full h-auto" />
       <div className="flex justify-between items-end gap-4">
         <div>
           <div className="w-full h-6 overflow-hidden">
             <h3>{title}</h3>
           </div>
           <a href="/" className="mb-2 text-[#7f7f7f] text-sm">
             Explore more...
           </a>
         </div>
         <div>
           <IoIosArrowRoundForward className="cursor-pointer text-2xl text-[#7f7f7f]" />
         </div>
       </div>
       {/* <ProductButton /> */}
     </div>
   );
}