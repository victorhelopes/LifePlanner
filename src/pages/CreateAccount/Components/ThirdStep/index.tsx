import { useState } from 'react';
import { Button } from '../../../../components/Button';
import { Textfield } from '../../../../components/Textfield';

import { StepsInterface } from '../firstStep';

import * as S from './styles'

export function ThirdStep({nextStep}: StepsInterface){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <>
            <h1>Para finalizar,</h1>
            <S.Subtitle>crie uma senha</S.Subtitle>
            <S.Inputs>
                <Textfield label="Senha:" placeholder="" maxWidth="21rem" setValue={setPassword}/>
                <Textfield label="Confirmar senha:" placeholder="" maxWidth="21rem" setValue={setConfirmPassword}/>
            </S.Inputs>
            <Button placeholder="Finalizar" backgroundColor="--primary-color" textColor="--white-color" maxWidth="21rem" onClick={nextStep}/>
        </>
    );
}