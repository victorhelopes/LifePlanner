
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Textfield } from '../../components/Textfield'

import * as S from './styles'
import { api } from '../../services'

export function CreateTask(){
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");

    async function createTask(){
        const dateValue = new Date(date);
        const hourSelected = Number(hour.split(':')[0])
        const minutesSelected = Number(hour.split(':')[1])

        dateValue.setHours(hourSelected)
        dateValue.setMinutes(minutesSelected)

        const userId = localStorage.getItem('userId')
        const body = {
            title: title,
            description: description,
            owner: userId,
            date: dateValue,
            expectDurationInMinutes: Number(duration),
        }

        try{
            await api.post('task/createTask', body)
            navigate('/')
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <S.CreateTaskBody>
            <S.CreateTaskTitle>Cadastro da tarefa</S.CreateTaskTitle>
            <S.CreateTaskForm>
                <Textfield placeholder='Título' label='Título' setValue={setTitle}/>
                <S.Row>
                    <Textfield placeholder='Data' label='Data' type='date' setValue={setDate}/>
                    <Textfield placeholder='Horário' label='Horário' type='time' setValue={setHour}/>
                    <Textfield placeholder='em minutos' label='Duração experada' type='number' setValue={setDuration}/>
                </S.Row>
                {/* <S.Row>
                    <SelectField placeholder='Se repete?' label='Se repete?' options={[{label: 'Sim', value: 'yes'}, {label: 'Não', value: 'no'}]} setValue={()=>{}} valueSelected=''/>
                    <SelectField placeholder='Tipo de repetição' label='Tipo de repetição' options={[{label: 'Sim', value: 'yes'}, {label: 'Não', value: 'no'}]} setValue={()=>{}} valueSelected=''/>
                </S.Row>
                <SelectField placeholder='Selecione os dias/Intervalos' label='Selecione os dias/Intervalos' options={[{label: 'Sim', value: 'yes'}, {label: 'Não', value: 'no'}]} setValue={()=>{}} valueSelected=''/> */}
                <Textfield placeholder='Descrição' label='Descrição' type='text' setValue={setDescription}/>
                {/* <Button 
                    placeholder='Adicionar nova subtarefa' 
                    backgroundColor='--white-color' 
                    borderColor='--confirm-color'
                    textColor='--confirm-color'
                    maxWidth='20rem' 
                    onClick={()=>{}}
                /> */}
            </S.CreateTaskForm>
            <S.CreateTaskFooter>
                <Button maxWidth='10rem' placeholder='Cancelar' backgroundColor='--cancel-color' textColor='--white-color' onClick={()=>{navigate('/')}}/>
                <Button maxWidth='10rem' placeholder='Confirmar' backgroundColor='--confirm-color' textColor='--white-color' onClick={createTask}/>
            </S.CreateTaskFooter> 
            
        </S.CreateTaskBody>
    )
}