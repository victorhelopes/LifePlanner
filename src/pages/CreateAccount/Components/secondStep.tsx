import { StepsInterface } from "./firstStep";

import * as S from '../styles'
import { Textfield } from "../../../components/Textfield";
import { Button } from "../../../components/Button";

export function SecondStep({nextStep}: StepsInterface){
    return (
        <>
            <h1>Olá Nome,</h1>
            <S.Subtitle>o primeiro passo foi dado, agora nos diga seu email</S.Subtitle>
            <Textfield label="Email:" placeholder="" maxWidth="21rem"/>
            <Button placeholder="Proximo passo" backgroundColor="--primary-color" textColor="--white-color" maxWidth="21rem" onClick={nextStep}/>
        </>
    );
}