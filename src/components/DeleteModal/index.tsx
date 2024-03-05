import { Button } from '../Button'
import * as S from './styles'
import { IModal } from '../../common/types';

export function DeleteModal({title, closeModal, confirmAction}: IModal){

    return(
        <>
            <S.Background/>
            <S.Modal>
                <S.ModalHeader>
                    <h1>{title || ''}</h1>
                    <span className="material-icons" onClick={closeModal}>close</span>
                </S.ModalHeader>
                <S.Action>
                    <Button 
                        placeholder='Cancelar' 
                        backgroundColor='--cancel-color' 
                        textColor='--white-color' 
                        maxWidth='8rem' 
                        onClick={closeModal}/>
                    <Button placeholder='Confirmar' backgroundColor='--confirm-color' textColor='--white-color' maxWidth='8rem' onClick={confirmAction}/>
                </S.Action>
            </S.Modal>
        </>
    )
}