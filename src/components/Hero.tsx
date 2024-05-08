import HeroImg from "../assets/Header_img.png";
import Rocket from "../assets/Rocket.png";
import Arrow from "../assets/Arrow.png";
import Spark from "../assets/Spark.png";
import Button from "./Button";

function Hero() {
    return (
        <div className="mt-16">
            <div className="text-center">
                <p className="font-grace text-[#2DA950] text-5xl mb-1">Success stories</p>
                <div className="text-7xl font-semibold">
                    <h1>Every success journey</h1>
                    <h1>we’ve encountered.</h1>
                </div>
            </div>
            <div className="flex justify-around mx-20 mt-24">
                <div className="relative">
                    <img
                        src={HeroImg}
                        alt="girl"
                        className="w-[30rem] h-[28rem] rounded-3xl"
                    />
                    <div className="bg-[#FFFFFF] absolute top-28 -left-20 rounded-2xl p-4 pt-8 pr-8 shadow-2xl hover:scale-110">
                        <img src={Spark} alt="spark" className="absolute -top-2 -left-3 w-16" />
                        <h1 className="text-4xl font-bold mb-3">40%</h1>
                        <div className="text-[#828282] text-sm">
                            <p>Achieved reduction in</p>
                            <p>project execution time</p>
                            <p>by optimising team</p>
                            <p>availability</p>
                        </div>
                    </div>
                    <div className="bg-[#002E18] absolute -right-14 -bottom-8 rounded-2xl p-6 shadow-2xl hover:scale-110">
                        <div className="flex items-baseline mb-4">
                            <h1 className="text-[#FFFFFF] text-4xl font-bold mr-2">$0.5</h1>
                            <p className="text-[#A6A3A0]">MILLION</p>
                        </div>
                        <div className="text-[#CCCCCC] text-sm">
                            <p>Reduced client expenses</p>
                            <p>by saving on hiring and</p>
                            <p>employee costs.</p>
                        </div>
                    </div>
                    <div className="flex bg-[#FFFFFF] rounded-full absolute bottom-8 -left-12 px-6 py-2 shadow-2xl hover:scale-110">
                        <img src={Rocket} alt="rocket" className="w-[3rem] mr-2" />
                        <div>
                            <p className="font-bold">10 DAYS</p>
                            <p className="text-sm text-[#828282]">Staff Deployment</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="text-5xl font-medium">
                        <h2>Enhance fortune 50</h2>
                        <h2>company’s insights</h2>
                        <h2>teams research</h2>
                        <h2>capabilities</h2>
                    </div>
                    <div className="flex mt-10">
                        <div className="w-2 h-2 mx-1 rounded-full bg-[#2DA950] cursor-pointer"></div>
                        <div className="w-2 h-2 mx-1 rounded-full bg-[#E4E3E3] cursor-pointer hover:bg-[#CAD0CB]"></div>
                        <div className="w-2 h-2 mx-1 rounded-full bg-[#E4E3E3] cursor-pointer hover:bg-[#CAD0CB]"></div>
                    </div>
                    <div className="flex mt-24">
                        <Button primary={true}>
                            Explore more
                            <img src={Arrow} alt="arrow" className="w-4 inline ml-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;