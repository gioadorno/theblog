import Link from "next/link";

const Header = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-3'>
            <Link href='/'>
            <img className="w-44 ml-3 object-contain cursor-pointer" src='/TheBlog.svg' alt='TheBlog' />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5 '>
                <h3 className="cursor-pointer">About</h3>
                <h3 className="cursor-pointer">Contact</h3>
                <h3 className='text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer'>Follow</h3>
            </div>
        </div>
        <div className='flex items-center space-x-5 text-green-600, cursor-pointer'>
            <h3 className='cursor-pointer'>Sign In</h3>
            <h3 className="border px-4 py-1 rounded-full border-green-600 hover:bg-green-600 hover:text-white cursor-pointer">Get Started</h3>
        </div>
    </header>
  )
}

export default Header