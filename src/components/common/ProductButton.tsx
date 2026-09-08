import { useState } from 'react';

const ProductButton = () => {
   const [isAdded,setIsAdded] = useState<boolean>(false)

   const handleAddToCart = ():void => {
      setIsAdded(true)
   }

   return (
     <div>
       <button
         type="button"
         className="font-normal bg-[#242323] text-white px-4 py-1.5 rounded-md cursor-pointer border border-[#242323] hover:bg-white hover:text-[#242323] transition-all delay-50"
         onClick={handleAddToCart}
       >
         {isAdded ? "Added" : 'Add to cart'}
       </button>
     </div>
   );
};

export default ProductButton;