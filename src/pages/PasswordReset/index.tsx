import { useState } from "react";
import { FirstStep } from "./Components/firstStep";

import * as S from './styles'
import { SecondStep } from "./Components/SecondStep/secondStep";

export function PasswordReset(){
    const [step, setStep] = useState<number>(1);
    return(
        <S.PasswordReset>
            {step === 1 && <FirstStep nextStep={()=>{setStep(2)}}/>}
            {step ===2 && <SecondStep nextStep={()=>{setStep(2)}}/>}
        </S.PasswordReset>
    );
}