import { Button } from "../../../components/Button";
import { Textfield } from "../../../components/Textfield";

import * as S from '../styles'

export interface StepsInterface{
    nextStep: () => void;
}

export function FirstStep({nextStep}: StepsInterface){

    return (
        <>
            <h1>Não consegue lembrar sua senha?</h1>
            <S.Subtitle>Nos informe seu email que iremos te ajudar</S.Subtitle>
            <Textfield label="Email:" placeholder="" maxWidth="21rem" setValue={()=>{}}/>
            <Button placeholder="Enviar email" backgroundColor="--primary-color" textColor="--white-color" maxWidth="21rem" onClick={nextStep}/>
        </>
    );
}