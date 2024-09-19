import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaStore, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className='bg-header w-full flex items-center justify-center text-background'>
            <div className="container flex flex-col justify-between px-8 mt-4">
                <div className='flex flex-wrap space-x-8 md:space-x-0 space-y-4 md:space-y-0 w-full  mt-2'>
                    {/* Company */}
                    <div className='md:w-3/4 lg:w-[45%] max-w-[90%] sm:pr-8 space-y-6' >
                        <div className='flex items-center gap-4'>
                            <div className='w-16 h-16 text-5xl flex justify-start items-center'><FaStore /></div>
                            <h1 className=' text-4xl font-black '>SILVER</h1>
                        </div>
                        <p className='w-full lg:w-4/5'>Ecommerce Website using : React TypeScript TailwindCSS
                            Redux Toolkit Axios API:DummyJSON React-Router-Dom React-Hook-Form
                        </p>
                        <div className='flex max-w-[80%]'>
                            <input className='bg-background text-header max-w-[240px] w-full flex-shrink-0 py-2 sm:px-2 rounded-md rounded-r-none rounded-br-none outline-none' type="email" placeholder='Your Email' />
                            <button className='bg-primary w-full py-2 sm:px-2 rounded-r-md max-w-[96px] sm:-ml-1 hover:bg-[#6AAA7C] duration-300'>Subscribe</button>
                        </div>

                    </div>
                    {/* navigation */}
                    <div className='md:w-1/4 lg:w-[15%]' >
                        <h4 className='text-xl font-bold mt-5'>Navigation</h4>
                        <nav className='space-y-3 mt-8 list-none'>
                            <li><Link className='hover:opacity-50 duration-300' to='/' >Home</Link></li>
                            <li><Link className='hover:opacity-50 duration-300' to='/product' >Product</Link></li>
                            <li><Link className='hover:opacity-50 duration-300' to='/about' >About</Link></li>
                            <li><Link className='hover:opacity-50 duration-300' to='/favorite' >Favorite</Link></li>

                        </nav>
                    </div>
                    {/* Help */}
                    <div className='md:w-1/2 lg:w-[20%]' >
                        <h4 className='text-xl font-bold mt-5'>Help</h4>
                        <nav className='space-y-3 mt-8 list-none'>
                            <li><Link className='hover:opacity-50 duration-300' to='#' >How does it works?</Link></li>
                            <li><Link className='hover:opacity-50 duration-300' to='#' >Where to ask question?</Link></li>
                            <li><Link className='hover:opacity-50 duration-300' to='#' >How to play?</Link></li>
                            <li><Link className='hover:opacity-50 duration-300' to='#' >What is needed for this?</Link></li>
                        </nav>
                    </div>
                    {/* Contact */}
                    <div className='md:w-1/2 lg:w-[20%]' >
                        <h4 className='text-xl font-bold mt-5'>Contact</h4>
                        <div className='space-y-3 mt-8'>
                            <p className="font-serif">(+66)123456789</p>
                            <p>Silver Store Ecommerce</p>
                            <p>Bangkok,Thailand Asia Pacific</p>
                            <p>10123</p>
                        </div>
                    </div>
                </div>
                <hr className='mt-10' />
                <div className=' flex flex-col sm:flex-row gap-4 justify-between items-center mt-10 mb-5'>
                    <p className='font-light text-background font-serif'>© Makawan Saengngoen Silver Store 2024.</p>
                    <nav className='flex gap-4 text-4xl'>
                        <Link to="https://www.facebook.com/" target='_blank'><FaSquareFacebook /></Link>
                        <Link to="https://www.instagram.com/" target='_blank'><FaSquareInstagram /></Link>
                        <Link to="https://x.com/" target='_blank'><FaSquareXTwitter /></Link>
                        <Link to="https://github.com/makawan-silverlight" target='_blank'><FaGithub /></Link>
                    </nav>
                </div>
            </div>
        </footer >
    )
}

export default Footer