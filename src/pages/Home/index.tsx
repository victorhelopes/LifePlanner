import { useEffect, useState } from "react";

import { AddObjetiveModal } from "./components/AddObjetiveModal";
import { AddFinanceModal } from "../../components/AddFinanceModal";
import { DataBoard } from "../../components/DataBoard";

import { ICard } from "../../common/types";

import * as S from './styles'
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import { DeleteModal } from "../../components/DeleteModal";
import { UpdateObjetiveModal } from "./components/UpdateObjetiveModal";

interface financeApiGet{
    cashInFlow: number;
    cashOutFlow: number;
}

export function Home(){
    const navigate = useNavigate();

    const [isAddObjetiveModalOpen, setIsAddObjetiveModalOpen] = useState(false);
    const [isUpdateObjectiveModalOpen, setIsUpdateObjectiveModalOpen] = useState(false);
    const [idObjectiveUpdating, setIdObjectiveUpdating] = useState('')

    const [isFinanceModalOpen, setIsFinanceModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);
    const [idDeleting, setIdDeleting] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [todayActivities, setTodayActivies] = useState<ICard[]>([]);
    const [objetives, setObjetives] = useState<ICard[]>([]);
    const [financeInfos, setFinanceInfos] = useState<ICard[]>([
            {_id: 'Entrada', title: 'Entrada', value:'0', textColor: '--white-color', backgroundColor: '--confirm-color'},
            {_id: 'Saída', title: 'Saída', value:'0', textColor: '--white-color', backgroundColor: '--cancel-color'},
            {_id: 'Saldo', title: 'Saldo', value:'0', textColor: '--white-color', backgroundColor: '--primary-color'},
        ]);
    
    useEffect(()=>{
        const userId = localStorage.getItem('userId')
        async function getallTasks(){
            const { data } = await api.get(`task/getAllCreatedByUser/${userId}`)
            setTodayActivies(data as ICard[])
        };
        async function getallFinance(){
            const { cashInFlow, cashOutFlow } = (await api.get(`finance/getFromOwner/${userId}`)).data as financeApiGet
            let financeInfo = financeInfos;
            financeInfo[0].value = `${cashInFlow}`
            financeInfo[1].value = `${cashOutFlow}`
            financeInfo[2].value = `${cashInFlow - cashOutFlow}`
            setFinanceInfos(financeInfo)
        }
        async function getallObjectivies(){
            const { data } = await api.get(`objective/getAllCreatedByUser/${userId}`)
            setObjetives(data as ICard[])
        }
        Promise.all([
        getallTasks(),
        getallFinance(),
        getallObjectivies()]).then(()=>{
            setIsLoading(false);
        })
    },[financeInfos, isFinanceModalOpen, isAddObjetiveModalOpen, isUpdateObjectiveModalOpen])

    async function deleteTask(){
        try{
            const response = await api.delete(`task/deleteTask/${idDeleting}`)
            setIsDeleteTaskModalOpen(false)
            return response
        }catch(e){
            console.log(e)
        }
    }

    async function deleteObjective(){
        try{
            const response = await api.delete(`objective/delete/${idDeleting}`);
            setIsDeleteModalOpen(false)
            return response
        }catch(e){
            console.log(e)
        }
    }
    
    return (
        <>
            <S.Home>
                <DataBoard 
                    title="Atividades do dia" 
                    buttonTitle="Adicionar nova atividade do dia +"  
                    buttonAction={()=>{navigate('/Create-task')}}
                    buttonColor='--confirm-color'
                    boardType="timelineActivities"
                    infos={todayActivities}
                    loading={isLoading}
                    edit={(value)=>{navigate(`Update-task/${value}`)}}
                    remove={(value)=>{setIdDeleting(value);setIsDeleteTaskModalOpen(true)}}
                    
                />
                <DataBoard 
                    title="Objetivos do ano" 
                    buttonTitle="Adicionar novo objetivo +" 
                    buttonAction={()=>{setIsAddObjetiveModalOpen(true)}}
                    buttonColor='--confirm-color'
                    boardType="checklist"
                    infos={objetives}
                    loading={isLoading}
                    edit={(value)=>{
                        setIsUpdateObjectiveModalOpen(true);
                        setIdObjectiveUpdating(value)
                    }}
                    remove={(value)=>{setIdDeleting(value);setIsDeleteModalOpen(true)}}
                />
                <DataBoard 
                    title="Financeiro" 
                    buttonTitle="Adicionar nova informação financeira +"  
                    buttonAction={()=>{setIsFinanceModalOpen(true)}}
                    buttonColor='--confirm-color'
                    boardType="infos"
                    infos={financeInfos}
                loading={isLoading}/>

            </S.Home>

            {isAddObjetiveModalOpen && <AddObjetiveModal closeModal={()=>{setIsAddObjetiveModalOpen(false)}}/>}
            {isUpdateObjectiveModalOpen && <UpdateObjetiveModal id={idObjectiveUpdating} closeModal={()=>{setIsUpdateObjectiveModalOpen(false)}}/>}
            {isDeleteModalOpen && <DeleteModal title="Tem certeza de deseja deletar esse objetivo?" closeModal={()=>{setIsDeleteModalOpen(false)}} confirmAction={deleteObjective}/>}

            {isFinanceModalOpen && <AddFinanceModal closeModal={()=>{setIsFinanceModalOpen(false)}}/>}
            {isDeleteTaskModalOpen && <DeleteModal title="Tem certeza de deseja deletar essa tarefa?" closeModal={()=>{setIsDeleteTaskModalOpen(false)}} confirmAction={deleteTask}/>}
        </>
    )
}