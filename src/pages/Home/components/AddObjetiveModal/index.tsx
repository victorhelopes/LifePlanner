import { useState } from 'react';
import { Button } from '../../../../components/Button'
import { Textfield } from '../../../../components/Textfield'
import * as S from './styles'
import { api } from '../../../../services';
import { IModal } from '../../../../common/types';

export function AddObjetiveModal({closeModal}: IModal){
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    async function createObjective(){
        const userId = localStorage.getItem('userId')
        const body = {
            title,
            description,
            owner: userId
        }
        try{
            await api.post('objective/create', body);
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
                    <h1>Cadastrar objetivo do ano</h1>
                    <span className="material-icons" onClick={closeModal}>close</span>
                </S.ModalHeader>
                <>
                    <Textfield placeholder='Titulo' setValue={setTitle}/>
                    <Textfield placeholder='Descrição' type='textarea' setValue={setDescription}/>
                </>
                <S.Action>
                    <Button 
                        placeholder='Cancelar' 
                        backgroundColor='--cancel-color' 
                        textColor='--white-color' 
                        maxWidth='8rem' 
                        onClick={closeModal}/>
                    <Button placeholder='Confirmar' backgroundColor='--confirm-color' textColor='--white-color' maxWidth='8rem' onClick={createObjective}/>
                </S.Action>
            </S.Modal>
        </>
    )
}