import { useState } from "react";
import { FirstStep } from "./Components/firstStep";
import { SecondStep } from "./Components/secondStep";
import { ThirdStep } from "./Components/ThirdStep";

import * as S from './styles'
import { api } from "../../services";

export function CreateAccount(){
    const [step, setStep] = useState<number>(1);
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    function createAccount(){
        api.post('/user/createUser', {
            "email": email,
            "name": name,
            "password": password
        })
    }

    return (
        <S.CreateAccount>
            {step === 1 && <FirstStep nextStep={()=>{setStep(2)}} setValue={setName}/>}
            {step === 2 &&<SecondStep nextStep={()=>{setStep(3)}} setValue={setEmail}/>}
            {step === 3 &&<ThirdStep nextStep={()=>{createAccount()}} setValue={setPassword}/>}
        </S.CreateAccount>
    );
}