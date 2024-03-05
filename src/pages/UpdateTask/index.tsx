
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Textfield } from '../../components/Textfield'

import * as S from './styles'
import { api } from '../../services'
import { ITask } from '../../common/types'
import { SelectField } from '../../components/SelectField'

export function UpdateTask(){
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [status, setStatus] = useState("");
    const [duration, setDuration] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        async function getTaskInfos(){
            try{
                const response = (await api.get(`task/getTaskById/${id}`)).data as ITask;
                const dateValue = new Date(response.taskInfos[0].date);
                const hourSelected = Number(dateValue.getHours())
                const minutesSelected = Number(dateValue.getMinutes())
                setTitle(response.title)
                setDate(`${dateValue.getFullYear()}-${dateValue.getMonth() < 10 ? '0' +dateValue.getMonth() : dateValue.getMonth() }-${dateValue.getDate() < 10 ? '0' +dateValue.getDate() : dateValue.getDate()}`)
                setHour(`${hourSelected}:${minutesSelected}`)
                setDuration(response.expectDurationInMinutes)
                setDescription(response.description)
                setStatus(response.taskInfos[0].status)
            }catch(e){
                console.log(e)
            }
        }

        getTaskInfos()
    },[id])

    async function updateTask(){
        const dateValue = new Date(date);
        const hourSelected = Number(hour.split(':')[0])
        const minutesSelected = Number(hour.split(':')[1])

        dateValue.setHours(hourSelected)
        dateValue.setMinutes(minutesSelected)
        dateValue.setDate(dateValue.getDate() + 1)
        dateValue.setMonth(dateValue.getMonth() + 1)

        const body = {
            title: title,
            description: description,
            date: dateValue,
            expectDurationInMinutes: Number(duration),
        }

        try{
            await api.put(`task/updateTask/${id}`, body);
            navigate('/');
        }catch(e){
            console.log(e)
        } 
    }
    
    return(
        <S.CreateTaskBody>
            <S.CreateTaskTitle>Atualização da tarefa</S.CreateTaskTitle>
            <S.CreateTaskForm>
                <Textfield placeholder='Título' label='Título' setValue={setTitle} value={title}/>
                <S.Row>
                    <Textfield placeholder='Data' label='Data' type='date' setValue={setDate} value={date}/>
                    <Textfield placeholder='Horário' label='Horário' type='time' setValue={setHour} value={hour}/>
                    <Textfield placeholder='em minutos' label='Duração experada' type='number' setValue={setDuration} value={duration}/>
                </S.Row>
                {/* <S.Row>
                    <SelectField placeholder='Se repete?' label='Se repete?' options={[{label: 'Sim', value: 'yes'}, {label: 'Não', value: 'no'}]} setValue={()=>{}} valueSelected=''/>
                    <SelectField placeholder='Tipo de repetição' label='Tipo de repetição' options={[{label: 'Sim', value: 'yes'}, {label: 'Não', value: 'no'}]} setValue={()=>{}} valueSelected=''/>
                </S.Row>
            */}
                <SelectField placeholder='Status' label='Status' options={[{label: 'Não iniciada', value: 'notStarted'},{label: 'Em progresso', value: 'inProgress'}, {label: 'Concluída', value: 'conclude'}]} setValue={setStatus} valueSelected={status}/> 
                <Textfield placeholder='Descrição' label='Descrição' type='text' setValue={setDescription} value={description}/>
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
                <Button maxWidth='10rem' placeholder='Confirmar' backgroundColor='--confirm-color' textColor='--white-color' onClick={updateTask}/>
            </S.CreateTaskFooter> 
            
        </S.CreateTaskBody>
    )
}