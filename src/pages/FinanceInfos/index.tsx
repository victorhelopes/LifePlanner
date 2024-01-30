import { useState } from 'react';
import { DataBoard } from '../../components/DataBoard'

import * as S from './styles'
import { CardInterface } from '../../common/types';
import { AddFinanceModal } from '../../components/AddFinanceModal';

export function FinanceInfos(){
    const [inflowInfos, setInflowInfos] = useState<CardInterface[]>([{title: 'info1', value: '12', description: 'Descrição'}]);
    const [outflowInfos, setOutflowInfos] = useState<CardInterface[]>([{title: 'info1', value: '12', description: 'Descrição'}]);
    const [balanceflowInfos, setBalanceflowInfos] = useState<CardInterface[]>([{title: 'info1', value: '12', description: 'Descrição'}]);
    const [addFinanceModalIsOpen, setAddFinanceModalIsOpen] = useState<boolean>(false);

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
        />
        <DataBoard 
            title="Saída" 
            buttonTitle="Cadastrar movimentação financeira"  
            buttonAction={()=>{setAddFinanceModalIsOpen(true)}}
            buttonColor='--confirm-color'
            boardType="infos"
            infos={outflowInfos}
        />
        <DataBoard 
            title="Saldo"
            buttonTitle="Cadastrar novo saldo de um banco"  
            buttonAction={()=>{setAddFinanceModalIsOpen(true)}}
            buttonColor='--confirm-color'
            boardType="infos"
            infos={balanceflowInfos}
        />
        </S.FinanceInfosLayout>

        {addFinanceModalIsOpen && <AddFinanceModal closeModal={()=>{setAddFinanceModalIsOpen(false)}}  />}
        </>
    )
}