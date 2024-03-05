
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { Textfield } from "../../components/Textfield";

import * as S from './styles'
import { api } from "../../services";
import { useEffect, useState } from "react";

export function Login(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({status: 0, message:""});

    function goToCreateAccount(){
        navigate('/CreateAccount') ;
        return;  
    }

    async function login(){
        try{
            const { data } = await api.post('user/login', {
                email: name,
                password: password
            })
            localStorage.setItem('userId', data.body._id)
            navigate('/');
        }catch(e){
            switch (e.response.status){
                case 400:
                    setError( {status: e.response.status, message:'Senha digitada está incorreta'})
                    return e.response.status
                case 401:
                    setError( {status: e.response.status, message:'Usuário não existe'})
                    return e.response.status
            }
        }
    }

    return (
        <S.Login>
            <h1>Life Planner</h1>
            <Textfield placeholder="Digite o seu usuário" label="Username:" setValue={setName} error={error.status === 401? error.message : undefined}/>
            <Textfield placeholder="Digite a senha" label="Senha:" setValue={setPassword} type="password" error={error.status === 400? error.message : undefined}/>
            <Link  text="Esqueceu a senha?" link='/PasswordReset'/>
            <Button placeholder="Entrar" backgroundColor="--primary-color" textColor="--white-color" onClick={login}/>
            <Button placeholder="Novo por aqui? Crie sua conta" backgroundColor="--white-color" textColor="--primary-color" onClick={goToCreateAccount}/>
        </S.Login>
    )
}