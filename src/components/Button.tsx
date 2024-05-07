import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    primary?: boolean;
};

function Button({ children, primary }: Props) {
    return (
        <div className={`border-[#EAEAEA] border-[1px] px-8 py-4 rounded-full mx-1 text-sm text-[#1C1C1C] cursor-pointer ${primary ? 'bg-[#1C1C1C] text-[#FFFFFF] hover:bg-[#4E4E4E]' : 'hover:bg-[#F1F1F1]'}`}>
            {children}
        </div>
    );
}

export default Button;