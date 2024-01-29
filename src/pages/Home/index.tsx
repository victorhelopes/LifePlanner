import { useState } from "react";
import { AddObjetiveModal } from "./components/AddObjetiveModal";
import { DataBoard } from "./components/DataBoard";

import * as S from './styles'
import { AddFinanceModal } from "./components/AddFinanceModal";
import { CardInterface } from "../../common/types";

export function Home(){
    const [isAddObjetiveModalOpen, setIsAddObjetiveModalOpen] = useState(false);
    const [isFinanceModalOpen, setIsFinanceModalOpen] = useState(false);

    const [todayActivities, setTodayActivies] = useState<CardInterface[]>([{title: 'info1'}]);
    const [objetives, setObjetives] = useState<CardInterface[]>([{title: 'info1'}]);
    const [financeInfos, setFinanceInfos] = useState<CardInterface[]>([
            {title: 'Entrada', value:'100', textColor: '--white-color', backgroundColor: '--confirm-color'},
            {title: 'Saída', value:'100', textColor: '--white-color', backgroundColor: '--cancel-color'},
            {title: 'Saldo', value:'100', textColor: '--white-color', backgroundColor: '--primary-color'},
        ]);
    
    return (
        <>
            <S.Home>
                <DataBoard 
                    title="Atividades do dia" 
                    buttonTitle="Adicionar nova atividade do dia +"  
                    buttonAction={()=>{}}
                    buttonColor='--confirm-color'
                    boardType="timelineActivities"
                    infos={todayActivities}
                />
                <DataBoard 
                    title="Objetivos do ano" 
                    buttonTitle="Adicionar novo objetivo +" 
                    buttonAction={()=>{setIsAddObjetiveModalOpen(true)}}
                    buttonColor='--confirm-color'
                    boardType="checklist"
                    infos={objetives}
                />
                <DataBoard 
                    title="Financeiro" 
                    buttonTitle="Adicionar nova informação financeira +"  
                    buttonAction={()=>{setIsFinanceModalOpen(true)}}
                    buttonColor='--confirm-color'
                    boardType="infos"
                    infos={financeInfos}
                />
            </S.Home>

            {isAddObjetiveModalOpen && <AddObjetiveModal closeModal={()=>{setIsAddObjetiveModalOpen(false)}}/>}
            {isFinanceModalOpen && <AddFinanceModal closeModal={()=>{setIsFinanceModalOpen(false)}}/>}
        </>
    )
}