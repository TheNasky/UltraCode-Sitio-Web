const NavLink = ({ onClick, title }) => {
   return (
      <button
         onClick={onClick}
         className="block py-2 pl-3 pr-4 text-white sm:text-m 2xl:text-lg rounded md:p-0 hover:text-[#3A7DE8]"
      >
         {title}
      </button>
   );
};

export default NavLink;
