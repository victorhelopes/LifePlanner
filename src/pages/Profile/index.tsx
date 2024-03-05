import { useEffect, useState } from "react"
import { api } from "../../services"
import { Textfield } from "../../components/Textfield";
import { Button } from "../../components/Button";

import * as S from './styles'
import { useNavigate } from "react-router-dom";

export function Profile(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');


    useEffect(()=>{
        async function getUserInfos(){
            const value = localStorage.getItem('userId')
            if(value){
                setUserId(value)
                const {data} = await api.get(`user/getUser/${value}`)
                setName(data.name)
            }
        }

        getUserInfos();

    },[])

    return(
        <S.form>
            <Textfield label="Nome" placeholder="Nome" value={name} setValue={(value)=>setName(value)}/>
            <Button backgroundColor='--confirm-color' placeholder="Confirmar" onClick={async ()=>{
                await api.put(`user/updateUser/${userId}`, {name: name})
                navigate('/')
            }}/>
        </S.form>
    )
}