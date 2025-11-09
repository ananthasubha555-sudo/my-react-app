import {FaApple,
  FaSearch
} from "react-icons/fa";
 function Navbar() {
  return (
    <nav className="bg-black text-white py-5 flex justify-between px-20 items-center">
      <h1 className="font-bold text-3xl"><FaApple/></h1>
      <ul className=" hidden md:flex justify-center space-x-8 items-center">
        <li> <a href="" className="hover:text-blue-300">Store</a></li>
         <li> <a href="" className="hover:text-blue-300">Mac</a></li>
         <li> <a href="" className="hover:text-blue-300">ipad</a></li>
         <li> <a href="" className="hover:text-blue-300">iphone</a></li>
         <li> <a href="" className="hover:text-blue-300">Watch</a></li>
         <li> <a href="" className="hover:text-blue-300">Airpods</a></li>
          <li> <a href="" className="hover:text-blue-300">Tv&Home</a></li>
           <li> <a href="" className="hover:text-blue-300">Accessories</a></li>
            <li> <a href="" className="hover:text-blue-300">Service</a></li>
      </ul>
      <h1 className="px-10 items-center text-xl"><FaSearch/></h1>
      
    </nav>
    
  );
}
export default Navbar;
