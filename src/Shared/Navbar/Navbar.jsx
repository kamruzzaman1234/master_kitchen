import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div className="bg-green-600">
            <div className="max-w-[1460px] mx-auto w-full">
    <div className="navbar bg-green-600 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
         viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/" className="font-medium uppercase text-[17px]">Home</Link></li>
        <li><Link to="/" className="font-medium uppercase text-[17px]">About</Link></li>
        <li><Link to="/" className="font-medium uppercase text-[17px]">Service</Link></li>
        <li><Link to="/" className="font-medium uppercase text-[17px]">Blog</Link></li>
        <li><Link to="/" className="font-medium uppercase text-[17px]">Contact</Link></li>
        
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl uppercase">Chef</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/" className="font-medium uppercase text-[17px]">Home</Link></li>
      <li><Link to="/" className="font-medium uppercase text-[17px]">About</Link></li>
      <li><Link to="/" className="font-medium uppercase text-[17px]">Service</Link></li>
      <li><Link to="/" className="font-medium uppercase text-[17px]">Blog</Link></li>
      <li><Link to="/" className="font-medium uppercase text-[17px]">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Link className="btn uppercase">Sign In</Link>
    <Link className="btn uppercase">Register</Link>
  </div>
</div>
        </div>
        </div>
    )
}
export default Navbar;