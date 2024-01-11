
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { Textfield } from "../../components/Textfield";

import * as S from './styles'

export function Login(){
    const navigate = useNavigate();

    function goToCreateAccount(){
        navigate('/CreateAccount') ;
        return;  
    }

    function login(){
        navigate('/');
    }

    return (
        <S.Login>
            <h1>Life Planner</h1>
            <Textfield placeholder="Digite o seu usuário" label="Username:" />
            <Textfield placeholder="Digite a senha" label="Senha:"/>
            <Link  text="Esqueceu a senha?" link='/PasswordReset'/>
            <Button placeholder="Entrar" backgroundColor="--primary-color" textColor="--white-color" onClick={login}/>
            <Button placeholder="Novo por aqui? Crie sua conta" backgroundColor="--white-color" textColor="--primary-color" onClick={goToCreateAccount}/>
        </S.Login>
    )
}