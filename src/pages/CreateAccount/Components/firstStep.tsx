import { Button } from "../../../components/Button";
import { Textfield } from "../../../components/Textfield";

import * as S from '../styles'

export interface StepsInterface{
    nextStep: () => void;
    setValue: (value: string) => void;
}

export function FirstStep({nextStep, setValue}: StepsInterface){
    return (
        <>
            <h1>Crie uma conta</h1>
            <S.Subtitle>e mude seu jeito de organizar sua vida</S.Subtitle>
            <Textfield label="Nos diga qual o seu nome:" placeholder="" maxWidth="21rem" setValue={setValue}/>
            <Button placeholder="Proximo passo" backgroundColor="--primary-color" textColor="--white-color" maxWidth="21rem" onClick={nextStep}/>
        </>
    );
}