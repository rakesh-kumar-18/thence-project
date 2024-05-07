import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    primary?: boolean;
    isDisable?: boolean;
    isSubmit?: boolean;
};

function Button({ children, primary, isDisable, isSubmit }: Props) {
    return (
        <button className={`border-[#EAEAEA] border-[1px] px-8 py-5 rounded-full mx-1 text-sm text-[#1C1C1C] cursor-pointer ${primary ? 'bg-[#1C1C1C] text-[#FFFFFF] hover:bg-[#4E4E4E]' : 'hover:bg-[#F1F1F1]'} ${isDisable && 'bg-[#C9C9C9]'} ${isSubmit && 'w-full'}`} disabled={isDisable}>
            {children}
        </button>
    );
}

export default Button;