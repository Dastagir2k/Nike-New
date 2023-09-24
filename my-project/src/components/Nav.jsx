import { hamburger } from '../assets/icons';
import {headerLogo} from '../assets/images';
import { navLinks } from '../constants';
//import {hamburger} from '../assets/icons'
const Nav = () => {
  return (
    <header className=' padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="">
          <img src={headerLogo}
          alt='logo'
          width={130}
          height={29}/>
        </a>
        <ul className='flex-1 flex justify-end
         items-center gap-16 max-lg:hidden'>
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a
              href={items.href}
              className='font-montserrat leading-normal text-lg
              text-slate-gray hover:text-coral-red'>
                {items.label}
              </a>

            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block cursor-pointer'>
          <img
          alt='hamburger'
          src={hamburger}
          width={25}
          height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav