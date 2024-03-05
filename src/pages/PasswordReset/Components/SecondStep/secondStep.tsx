import { StepsInterface } from "../firstStep";

import * as S from './styles'
import { Textfield } from "../../../../components/Textfield";
import { Button } from "../../../../components/Button";

export function SecondStep({nextStep}: StepsInterface){
    return (
        <>
            <h1>Redefina sua senha</h1>
            <S.Inputs>
                <Textfield label="Senha:" placeholder="" maxWidth="21rem" setValue={()=>{}}/>
                <Textfield label="Confirmar senha:" placeholder="" maxWidth="21rem" setValue={()=>{}}/>
            </S.Inputs>
            <Button placeholder="REDEFINIR SENHA" backgroundColor="--primary-color" textColor="--white-color" maxWidth="21rem" onClick={nextStep}/>
        </>
    );
}