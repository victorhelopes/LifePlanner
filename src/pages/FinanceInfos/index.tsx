import { useEffect, useState } from 'react';
import { DataBoard } from '../../components/DataBoard'

import * as S from './styles'
import { ICard } from '../../common/types';
import { AddFinanceModal } from '../../components/AddFinanceModal';
import { api } from '../../services';
import { DeleteModal } from '../../components/DeleteModal';

export function FinanceInfos(){
    const [inflowInfos, setInflowInfos] = useState<ICard[]>([]);
    const [outflowInfos, setOutflowInfos] = useState<ICard[]>([]);
    const [balanceflowInfos, setBalanceflowInfos] = useState<ICard[]>([]);
    const [addFinanceModalIsOpen, setAddFinanceModalIsOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [idDeleting, setIdDeleting] = useState('');
    const [idUpdating, setIdUpdating] = useState('');


    async function getDetailed() {
        const userId = localStorage.getItem('userId')
        const { cashInFlow, cashOutFlow } = (await api.get(`finance/getDetailed/${userId}`)).data as {cashInFlow: ICard[], cashOutFlow: ICard[]};
        setInflowInfos(cashInFlow);
        setOutflowInfos(cashOutFlow);
        let balanceAux = 0 ;
        cashInFlow.forEach((info)=>{
            balanceAux += parseFloat(`${info.value}`)
        })
        cashOutFlow.forEach((info)=>{
            balanceAux -= parseFloat(`${info.value}`)
        })
        setBalanceflowInfos([{_id: '', title:'Saldo Total', value: `${balanceAux}`}])
    }

    useEffect(()=>{
        getDetailed();
    },[isDeleteModalOpen, addFinanceModalIsOpen])

    async function deleteFinance(){
        try{
            const response = await api.delete(`finance/delete/${idDeleting}`);
            setIsDeleteModalOpen(false)
            return response
        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
        <S.FinanceInfosLayout>
            <DataBoard 
                title="Entrada" 
                buttonTitle="Cadastrar movimentação financeira"  
                buttonAction={()=>{setAddFinanceModalIsOpen(true)}}
                buttonColor='--confirm-color'
                boardType="infos"
                infos={inflowInfos}
                remove={(value)=>{setIdDeleting(value); setIsDeleteModalOpen(true)}}
                edit={(value)=>{setIdUpdating(value);setAddFinanceModalIsOpen(true)}}
                loading={false}
            />
            <DataBoard 
                title="Saída" 
                buttonTitle="Cadastrar movimentação financeira"  
                buttonAction={()=>{setAddFinanceModalIsOpen(true)}}
                buttonColor='--confirm-color'
                boardType="infos"
                infos={outflowInfos}
                remove={(value)=>{setIdDeleting(value); setIsDeleteModalOpen(true)}}
                edit={(value)=>{setIdUpdating(value);setAddFinanceModalIsOpen(true)}}
                loading={false}
            />
            <DataBoard 
                title="Saldo"
                buttonAction={()=>{setAddFinanceModalIsOpen(true)}}
                buttonColor='--confirm-color'
                boardType="infos"
                infos={balanceflowInfos}
                loading={false}
            />
        </S.FinanceInfosLayout>

        {addFinanceModalIsOpen && <AddFinanceModal closeModal={()=>{setIdUpdating('');setAddFinanceModalIsOpen(false)}} id={idUpdating}  />}
        {isDeleteModalOpen && <DeleteModal title="Tem certeza de deseja deletar esse objetivo?" closeModal={()=>{setIsDeleteModalOpen(false)}} confirmAction={deleteFinance}/>}
        </>
    )
}