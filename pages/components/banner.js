import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import banner from '../../public/images/bannerImage.png';
import getStarted from '../../public/images/getStartedIcon.png';
import learnMore from '../../public/images/learnMoreIcon.png';
import brands from '../../public/images/brands.png';


const Banner = () => {
    return <div>
        <Head>


        </Head>
        <div class="lg:flex lg:justify-between mt-[93px]">
            <div class="mt-[101px] px-[29px] lg:pl-[81px]">
                <h1 className="font-sporting font-bold text-[56px] mb-[23px] tracking-[.01em] leading-[73px]">Healthy in side<br/><span className="text-[#8382EB]">fresh</span> out side</h1>
                <p className="mb-[22px] text-omar-black tracking-[.01em] leading-[28px] opacity-[.6] lg:w-[442px]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div className="flex">
                    <button className="w-[246px] h-[56px] mr-[35px] pl-6 pr-[15px] flex justify-between items-center text-white bg-[#264373] rounded-[10px]">
                        <p>Get started</p>
                        <Image class="w-[26px] h-[26px]"
                            src={getStarted}
                            alt="Sport Healthy" />
                    </button>
                    <button className="w-[174px] h-[56px] p-[21px] flex items-center text-[#264373] bg-white rounded-[10px]">
                        <Image class="w-[26px] h-[26px] mr-[15px]"
                            src={learnMore}
                            alt="Sport Healthy" />
                        <p>Learn more</p>
                    </button>
                </div>
                <div className="mt-[51px]">
                    <p className="text-[#262524] mb-[11px]">Brands:</p>
                    <div className="">
                    <Image class=""
                            src={brands}
                            alt="Sport Healthy" />
                    </div>
                </div>
            </div>
            <div className="pr-[80px] mt-[72.18px]">
                <Image class="w-full h-full"
                    src={banner}
                    alt="Sport Healthy" />
            </div>
        </div>
        


    </div>;
};
export default Banner;