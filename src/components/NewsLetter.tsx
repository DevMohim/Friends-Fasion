

const NewsLetter = () => {
   return (
     <div className="container mx-auto px-10 py-4 bg-[#E5C643] mt-10">
       <div className="flex flex-col gap-5 justify-center items-center p-20">
         <h1
           className="text-white max-w-[60%] font-black text-4xl
         text-center "
         >
           JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
         </h1>
         <p className="text-white text-2xl">
           Type your email down below and be young wild generation
         </p>
         <div className="flex items-center relative">
           <input
             type="text"
             placeholder="Add your email here"
             className="w-100 bg-white px-5 py-3 rounded-md outline-none"
           />
           <button
             type="button"
             className="font-normal bg-[#242323] text-white px-4 py-1.5 rounded-md cursor-pointer hover:underline absolute right-2"
           >
             SEND
           </button>
         </div>
       </div>
     </div>
   );
};

export default NewsLetter;