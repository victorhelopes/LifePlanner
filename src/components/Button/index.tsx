import { useEffect } from "react"

import * as S from './styles';

interface ButtonInterface {
    placeholder: string;
    backgroundColor: string;
    borderColor?: string;
    textColor?: string;
    maxWidth?: string;
    onClick?: ()=> void;
}

export function Button({placeholder, backgroundColor, textColor, borderColor, maxWidth, onClick}: ButtonInterface){
    useEffect(()=>{
        console.log(placeholder)
    })
    return (
        <>
            <S.Button 
                backgroundColor={backgroundColor} 
                textColor={textColor}
                borderColor={borderColor}
                onClick={onClick}
                maxWidth={maxWidth}
            >{placeholder}</S.Button>
        </>
    )
}