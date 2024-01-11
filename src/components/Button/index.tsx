import { useEffect } from "react"

import * as S from './styles';

interface ButtonInterface {
    placeholder: string;
    backgroundColor: string;
    textColor?: string;
    maxWidth?: string;
    onClick?: ()=> void;
}

export function Button({placeholder, backgroundColor, textColor, maxWidth, onClick}: ButtonInterface){
    useEffect(()=>{
        console.log(placeholder)
    })
    return (
        <>
            <S.Button 
                backgroundColor={backgroundColor} 
                textColor={textColor}
                onClick={onClick}
                maxWidth={maxWidth}
            >{placeholder}</S.Button>
        </>
    )
}