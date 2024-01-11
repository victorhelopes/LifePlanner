import { useState } from "react";
import { FirstStep } from "./Components/firstStep";
import { SecondStep } from "./Components/secondStep";
import { ThirdStep } from "./Components/ThirdStep";

import * as S from './styles'

export function CreateAccount(){
    const [step, setStep] = useState<number>(1);

    return (
        <S.CreateAccount>
            {step === 1 && <FirstStep nextStep={()=>{setStep(2)}}/>}
            {step === 2 &&<SecondStep nextStep={()=>{setStep(3)}}/>}
            {step === 3 &&<ThirdStep nextStep={()=>{setStep(3)}}/>}
        </S.CreateAccount>
    );
}