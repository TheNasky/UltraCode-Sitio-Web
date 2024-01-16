import { Link } from "react-router-dom";
const NavMobile = ({ path, title }) => {
   return (
      <Link
         to={path}
         className="block py-2 pl-3 pr-4 uppercase text-white sm:text-lg rounded md:p-0 hover:text-blue-600 "
      >
         {title}
      </Link>
   );
};

export default NavMobile;
