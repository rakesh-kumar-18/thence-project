import faqs from "../utils/qna";
import Question from "./Question";
import Union from "../assets/Union.svg";

function Faq() {
    return (
        <div className="flex justify-around bg-[#E8EEE7] mt-40 mx-8 px-28 rounded-3xl">
            <div className="w-1/2 my-16 relative">
                <div>
                    <p className="text-[#9E9D9D] font-grace text-2xl font-medium mb-2">What’s on your mind</p>
                    <h1 className="text-[#1C1C1C] text-5xl font-semibold">Ask Questions</h1>
                </div>
                <div className="w-[26rem] absolute -left-24 -bottom-20">
                    <img src={Union} alt="" />
                </div>
            </div>
            <div className="w-1/2 mt-20 mb-10">
                {faqs.map((faq, index) => (
                    <Question key={index} isLast={index === faqs.length - 1} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}

export default Faq;