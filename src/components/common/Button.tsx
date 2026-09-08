interface IButtonProps {
  name: string
}

const Button = ({name}:IButtonProps) => {
   return (
     <div>
       <button
         type="button"
         className="font-normal bg-[#242323] text-white px-4 py-1.5 rounded-md cursor-pointer hover:scale-110 transition-transform delay-50"
       >
         {name}
       </button>
     </div>
   );
};

export default Button;