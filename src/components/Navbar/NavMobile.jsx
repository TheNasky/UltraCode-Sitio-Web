const NavMobile = ({ onClick, title }) => {
   return (
      <button
         onClick={onClick}
         className="block py-2 pl-3 pr-4 uppercase text-white sm:text-lg rounded md:p-0 hover:text-blue-600"
      >
         {title}
      </button>
   );
};

export default NavMobile;
