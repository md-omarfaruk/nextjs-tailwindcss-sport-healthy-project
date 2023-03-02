import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../public/images/logo.png';
import { useState } from 'react';

const HeaderNavbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <Head>
                <title>Create Next Responsive Navbar With Tailwind CSS</title>
                <meta
                    name="description"
                    content="Create Next JS Responsive Menu with Tailwind CSS"
                />
                <Link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="w-full bg-white lg:bg-inherit px-[9px] py-[31px] lg:pl-23 lg:py-[51px] lg:pr-9">
                <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
                    <div>
                        <div className="flex items-center justify-between py-2 md:py-5 md:block">
                            <Link href="/">
                                <Image class="w-35 h-10"
                                    src={logo}
                                    alt="Sport Healthy"
                                />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-[#0A2259]"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-[#0A2259]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="text-black items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="">
                                    <Link href="/">
                                        <h4>Home</h4>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/blogs">
                                        <h4>Program</h4>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/about">
                                        <h4>Blog</h4>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/contact">
                                        <h4>About US</h4>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login">
                                        <button class='w-29 h-13 bg-omar-blue rounded-[10px]'>
                                            <h4 class='text-white'>Log in</h4>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default HeaderNavbar;