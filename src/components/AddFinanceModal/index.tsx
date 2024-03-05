import { useEffect, useState } from 'react';
import { Button } from '../Button'
import { SelectField } from '../SelectField';
import { Textfield } from '../Textfield'
import * as S from './styles'
import { api } from '../../services';

interface AddObjetiveModalInterface{
    id?: string;
    closeModal: ()=>void;
}



export function AddFinanceModal({closeModal, id}: AddObjetiveModalInterface){
    const [title, setTitle] = useState("");
    const [value, setValue] = useState<number>(0);
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [description, setDescription] = useState("");
    const [payedWith, setPayedWith] = useState("");
    const [type, setType] = useState('cashInFlow');

    useEffect(()=>{
        async function getInfos(){
            if(id){
                const response = (await api.get(`finance/getInfosFromFinanceId/${id}`)).data;
                setTitle(response.title)
                setDescription(response.description)
                setValue(response.value)
                setPayedWith(response.payedWith)
                setType(response.type)
                
                const dateValue = new Date(response.date);
                const hourSelected = Number(dateValue.getHours())
                const minutesSelected = Number(dateValue.getMinutes())
                setDate(`${dateValue.getFullYear()}-${dateValue.getMonth()+1 < 10 ? '0' +dateValue.getMonth()+1 : dateValue.getMonth()+1 }-${dateValue.getDate()+1 < 10 ? '0' +dateValue.getDate() : dateValue.getDate()}`)
                setHour(`${hourSelected}:${minutesSelected}`)
            }
        }

        getInfos();
    },[id])

    async function AddObjetiveFunction(){
        try{
            const dateValue = new Date(date);
            const hourSelected = Number(hour.split(':')[0])
            const minutesSelected = Number(hour.split(':')[1])

            dateValue.setHours(hourSelected)
            dateValue.setMinutes(minutesSelected)

            dateValue.setDate(dateValue.getDate() +1)
            const body = {
                title,
                value: Number(value),
                date: dateValue,
                description,
                type,
                payedWith,
            }
            if(id){
                await api.put(`finance/updateFinance/${id}`, body)
            }else{
                await api.post('finance/create', body)
            }
            closeModal();
        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
            <S.Background/>
            <S.Modal>
                <S.ModalHeader>
                    <h1>{id? 'Atualizar' : 'Cadastrar'} movimentação financeira</h1>
                    <span className="material-icons" onClick={closeModal}>close</span>
                </S.ModalHeader>

                <S.ModalBody>
                    <S.Row>
                        <Textfield placeholder='Título' label='Título' setValue={setTitle} value={title}/>
                        <Textfield placeholder='Valor' label='Valor' setValue={setValue} value={value}/>
                    </S.Row>

                    <S.Row>
                        <Textfield placeholder='Data' label='Data' type='date' setValue={setDate} value={date}/>
                        <Textfield placeholder='Horário' label='Horário' type='time' setValue={setHour} value={hour}/>
                    </S.Row>

                    <S.Row>
                        <SelectField 
                            placeholder='Tipo' 
                            label='Tipo' 
                            options={[{label: 'Entrada', value: 'cashInFlow'},{label: 'Saída', value: 'cashOutFlow'}]} 
                            setValue={(value)=>{setType(value)}} 
                            valueSelected={type}
                        />  
                        <SelectField 
                            placeholder='Forma de pagamento' 
                            label='Forma de pagamento' 
                            options={[
                                {label: 'Dinheiro', value: 'cash'},
                                {label: 'Cartão de crédito', value: 'creditCard'},
                                {label: 'Cartão de débito', value: 'debitCard'},
                                {label: 'Transfêrencia', value: 'wireTransfers'},
                                {label: 'Parcelado', value: 'installments'}
                            ]} 
                            setValue={(value)=>{console.log(value); setPayedWith(`${value}`)}} 
                            valueSelected={payedWith}
                        />
                    </S.Row>

                    <Textfield placeholder='Descrição' label='Descrição' type='textarea' setValue={setDescription} value={description}/>
                </S.ModalBody>

                <S.Action>
                    <Button 
                        placeholder='Cancelar' 
                        backgroundColor='--cancel-color' 
                        textColor='--white-color' 
                        maxWidth='8rem' 
                        onClick={closeModal}/>
                    <Button placeholder='Confirmar' backgroundColor='--confirm-color' textColor='--white-color' maxWidth='8rem' onClick={AddObjetiveFunction}/>
                </S.Action>
            </S.Modal>
        </>
    )
}