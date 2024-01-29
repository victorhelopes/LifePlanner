import { Button } from '../../../../components/Button'
import { Textfield } from '../../../../components/Textfield'
import * as S from './styles'

interface AddObjetiveModalInterface{
    closeModal: ()=>void;
}

function AddObjetiveFunction(){
    return ;
}

export function AddObjetiveModal({closeModal}: AddObjetiveModalInterface){
    return(
        <>
            <S.Background/>
            <S.Modal>
                <S.ModalHeader>
                    <h1>Cadastrar objetivo do ano</h1>
                    <span className="material-icons" onClick={closeModal}>close</span>
                </S.ModalHeader>
                <>
                    <Textfield placeholder='Titulo'/>
                    <Textfield placeholder='Subtitulo'/>
                    <Textfield placeholder='Descrição' type='textarea'/>
                    <Textfield placeholder='Data final' type='date'/>
                </>
                <S.Action>
                    <Button 
                        placeholder='Cancelar' 
                        backgroundColor='--cancel-color' 
                        textColor='--white-color' 
                        maxWidth='8rem' 
                        onClick={closeModal}/>
                    <Button placeholder='Confirmar' backgroundColor='--confirm-color' textColor='--white-color' maxWidth='8rem' onClick={()=>{AddObjetiveFunction(); closeModal()}}/>
                </S.Action>
            </S.Modal>
        </>
    )
}