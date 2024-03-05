import { useEffect, useState } from 'react';
import { Button } from '../../../../components/Button'
import { Textfield } from '../../../../components/Textfield'
import * as S from './styles'
import { api } from '../../../../services';
import { IModal } from '../../../../common/types';

interface IUpdateObjetiveModal extends IModal{
    id: string;
}

export function UpdateObjetiveModal({closeModal, id}: IUpdateObjetiveModal){
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(()=>{
        async function getTaskInfos(){
            try{
                const response = (await  api.get(`objective/getById/${id}`)).data;
                setTitle(response.title)
                setDescription(response.description)
            }catch(e){
                console.log(e)
            }
        }

        getTaskInfos()
    },[id])

    async function UpdateObjective(){
        const body = {
            title,
            description,
        }
        try{
            await api.put(`objective/update/${id}`, body);
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
                    <h1>Atualizar objetivos</h1>
                    <span className="material-icons" onClick={closeModal}>close</span>
                </S.ModalHeader>
                <>
                    <Textfield 
                        placeholder='Titulo' 
                        setValue={setTitle}
                        value={title}/>
                    <Textfield 
                        placeholder='Descrição' 
                        type='textarea' 
                        setValue={setDescription} 
                        value={description}/>
                </>
                <S.Action>
                    <Button 
                        placeholder='Cancelar' 
                        backgroundColor='--cancel-color' 
                        textColor='--white-color' 
                        maxWidth='8rem' 
                        onClick={closeModal}/>
                    <Button placeholder='Confirmar' backgroundColor='--confirm-color' textColor='--white-color' maxWidth='8rem' onClick={UpdateObjective}/>
                </S.Action>
            </S.Modal>
        </>
    )
}