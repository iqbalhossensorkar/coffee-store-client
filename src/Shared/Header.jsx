import 'tailwindcss/tailwind.css';
import logo from '../assets/images/more/logo1.png'

const Header = () => {
    return (
        <div className='bg-my-image h-20'>
            <div className='flex justify-center items-center gap-3 pt-2'>
                <img src={logo} alt="" className='h-16' />
                <h1 className='text-2xl text-white'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;