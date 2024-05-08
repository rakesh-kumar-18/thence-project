import { useState } from "react";

type Props = {
    question: string;
    answer: string;
    isLast: boolean;
};

function Question({ question, answer, isLast }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`my-6 ${!isLast && 'border-b-[1px] border-b-[#D7D7D7]'}`}>
            <div
                onClick={toggleExpand}
                className="cursor-pointer text-[#1C1C1C] font-bold mb-4 flex justify-between items-center"
            >
                <div className="w-3/5">
                    {question}
                </div>
                <div className="text-2xl">
                    {isExpanded ? '-' : '+'}
                </div>
            </div>
            <div className="text-[#617275] text-sm font-medium mb-4 w-11/12">
                {isExpanded && <div>{answer}</div>}
            </div>
        </div>
    );
}

export default Question;