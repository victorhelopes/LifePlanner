
import { useState } from 'react'
import { Button } from '../../components/Button'
import { SelectField } from '../../components/SelectField'
import { Textfield } from '../../components/Textfield'
import * as S from './styles'

export function CreateTask(){
    const [tasks, setTasks] = useState([]);

    return(
        <S.CreateTaskBody>
            <S.CreateTaskTitle>Cadastro da tarefa</S.CreateTaskTitle>
            <S.CreateTaskForm>
                <Textfield placeholder='Nome' label='Nome'/>
                <S.Row>
                    <Textfield placeholder='Data' label='Data' type='date'/>
                    <Textfield placeholder='Horário' label='Horário' type='time'/>
                </S.Row>
                <S.Row>
                    <SelectField placeholder='Se repete?' label='Se repete?' options={[{label: 'Sim', value: 'yes'}, {label: 'Não', value: 'no'}]}/>
                    <SelectField placeholder='Tipo de repetição' label='Tipo de repetição' options={[{label: 'Sim', value: 'yes'}, {label: 'Não', value: 'no'}]}/>
                </S.Row>
                <SelectField placeholder='Selecione os dias/Intervalos' label='Selecione os dias/Intervalos' options={[{label: 'Sim', value: 'yes'}, {label: 'Não', value: 'no'}]}/>
                <Textfield placeholder='Descrição' label='Descrição' type='text'/>
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
                <Button maxWidth='10rem' placeholder='Cancelar' backgroundColor='--cancel-color' textColor='--white-color' onClick={()=>{}}/>
                <Button maxWidth='10rem' placeholder='Confirmar' backgroundColor='--confirm-color' textColor='--white-color' onClick={()=>{}}/>
            </S.CreateTaskFooter> 
            
        </S.CreateTaskBody>
    )
}