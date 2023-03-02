import Image from "next/image";
import getThatMan from '/public/images/getThatMan.png';
import arrowRight from '/public/images/ArrowRight.png';
import arrowRightBlack from '/public/images/ArrowRightBlack.png';
import sherdChallenge from '/public/images/sherdChallenge.png';
import getFlat from '/public/images/getFlat.png';
import bestBody from '../../public/images/bestBody.png';
import getStartedArrowRight from '../../public/images/getStartedArrowRight.png';


const Main = () => {
    return <div>
        <div className="">
        <div className="lg:flex lg:justify-between mt-[122px] px-[29px] lg:px-[104px]">
            <div className="">
                <h1 className="w-[462px] font-sporting font-bold text-[46px] leading-[73px]">Healthy in side<br />fresh out side</h1>
            </div>
            <div className="">
                <p className="lg:w-[598px] text-[#262524] text-justify pt-[17px] tracking-[.01em] leading-[28px] opacity-50 ">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
            </div>
        </div>
        <div className="lg:w-[1236px] mx-[29px] lg:mx-[102px] mt-[137px] mb-[120px]">
        <div className="lg:flex px-[28px] lg:px-[85px] py-[87px] rounded-[30px] bg-gradient-to-l from-[#9190E9] to-[#6462F0]">
            
            {/* Get That 11 line */}

            <div className="flex mb-[52px] lg:mr-20">
            <div className="w-[100px] h-[100px] grid place-items-center  bg-[#8785F3] mr-[30px] rounded-[20px]">
                <Image class=""
                    src={getThatMan}
                    alt="Sport Healthy" />
            </div>
            <div className="">
            <p className="text-xl text-white font-bold mb-4">Get that 11 lins<br/>in 30 days</p>
            <button className="text-white flex justify-between items-center">
                <p className="mr-4">Learn more</p>
                <Image class="w-[15px] h-[15px]"
                    src={arrowRight}
                    alt="Sport Healthy" />
            </button>
            </div>
            </div>

            {/* Get Sherd Challenge */}

            <div className="flex mb-[52px] lg:mr-20">
            <div className="w-[100px] h-[100px] grid place-items-center  bg-[#8785F3] mr-[30px] rounded-[20px]">
                <Image class=""
                    src={sherdChallenge}
                    alt="Sport Healthy" />
            </div>
            <div className="">
            <p className="text-xl text-white font-bold mb-4">14 days<br />sherd challenge</p>
            <button className="text-white flex justify-between items-center">
                <p className="mr-[52px]">Learn more</p>
                <Image class="w-[15px] h-[15px]"
                    src={arrowRight}
                    alt="Sport Healthy" />
            </button>
            </div>
            </div>

            {/* Get Flat */}
            

            <div className="flex">
            <div className="w-[100px] h-[100px] grid place-items-center  bg-[#A09FEF] mr-[30px] rounded-[20px]">
                <Image class=""
                    src={getFlat}
                    alt="Sport Healthy" />
            </div>
            <div className="">
            <p className="text-xl text-white font-bold mb-4">Get flat belly<br />in 30 days</p>
            <button className="text-white flex justify-between items-center">
                <p className="mr-4">Learn more</p>
                <Image class="w-[15px] h-[15px]"
                    src={arrowRightBlack}
                    alt="Sport Healthy" />
            </button>
            </div>
            </div>
            
            
        </div>
        </div>
        </div>
               {/* Best body */}

               <div className="lg:flex lg:justify-between lg:mr-[99px] ml-[29px] mb-24">
        <div className="lg:mr-28 mr-5">
                <Image class=""
                    src={bestBody}
                    alt="Sport Healthy" />
            </div>
            <div className="">
                <h1 className="font-sporting text-[46px]">Best full body<br/>workout to lose fat</h1>
                <p className="lg:w-[488px] mt-[30px] mb-[50px] lg:opacity-50 opacity-[.6]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <button className="w-[246px] h-[56px] mr-[35px] pl-6 pr-[15px] flex justify-between items-center text-white bg-[#264373] rounded-[10px]">
                        <p>Get started</p>
                        <Image class="w-[32px] h-[32px]"
                            src={getStartedArrowRight}
                            alt="Sport Healthy" />
                    </button>
            </div>
        </div>
    </div>;
};
export default Main;