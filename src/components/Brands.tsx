import HM from '../assets/h&m.png'
import Obey from '../assets/obey.png'
import Shopify from '../assets/shopify.png'
import Lacoste from '../assets/lacoste.png'
import Levis from '../assets/levis.png'
import Amazon from '../assets/amazon.png'

const Brands = () => {
   return (
     <div className="container mx-auto bg-[#EBD96B]">
       <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 items-center px-8 py-4">
         <img src={HM} alt="H&M Logo" className="w-25 bg-transparent" />
         <img src={Obey} alt="Obey Logo" className="w-25" />
         <img src={Shopify} alt="Shopify Logo" className="w-25" />
         <img src={Lacoste} alt="Lacoste Logo" className="w-25" />
         <img src={Levis} alt="Levis Logo" className="w-25" />
         <img src={Amazon} alt="Amazon Logo" className="w-25" />
       </div>
     </div>
   );
};

export default Brands;