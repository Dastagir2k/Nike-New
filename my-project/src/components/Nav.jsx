


// import { Bars3Icon } from "@heroicons/react/24/solid";
// import { headerLogo } from '../assets/images';
// import { navLinks } from '../constants';

// const Nav = () => {
//   const handleClick = (href) => {
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href="#">
//           <img src={headerLogo} alt='logo' width={130} height={29} />
//         </a>
//         <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleClick(item.href);
//                 }}>
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className='hidden max-lg:block cursor-pointer'>
//           {/* <img alt='hamburger' src={hamburger} width={25} height={25} /> */}
//           <Bars3Icon width={25} height={25}/>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;




import { useState } from 'react';
import { Bars3Icon } from "@heroicons/react/24/solid";
import { headerLogo } from '../assets/images';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-5 py-2 bg-primary text-slate-gray z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <a className="text-bold" href="#home">
        <img src={headerLogo}
          alt='logo'
          width={130}
          height={29}/>
        </a>
        <nav className="hidden md:block">
          <ul className="flex gap-x-5">
            <li>
              <a
                href="#home"
                className="cursor-pointer hover:text-coral-red"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="cursor-pointer hover:text-coral-red"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="cursor-pointer hover:text-coral-red"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="cursor-pointer hover:text-coral-red"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {toggleMenu && (
          <nav className="md:hidden">
            <ul className="flex flex-col mobile-nav text-white ">
              <li>
                <a
                  href="#home"
                  className="cursor-pointer hover:text-coral-red"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="cursor-pointer hover:text-coral-red"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="cursor-pointer hover:text-coral-red"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="cursor-pointer hover:text-coral-red"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden text-black"
        >
          <Bars3Icon className="text-black h-5" />
        </button>
      </div>
    </header>
  );
};

export default Nav;
