import { Button } from '../../../../components/Button'
import { SelectField } from '../../../../components/SelectField';
import { Textfield } from '../../../../components/Textfield'
import * as S from './styles'

interface AddObjetiveModalInterface{
    closeModal: ()=>void;
}

function AddObjetiveFunction(){
    return ;
}

export function AddFinanceModal({closeModal}: AddObjetiveModalInterface){
    return(
        <>
            <S.Background/>
            <S.Modal>
                <S.ModalHeader>
                    <h1>Cadastrar movimentação financeira</h1>
                    <span className="material-icons" onClick={closeModal}>close</span>
                </S.ModalHeader>

                <S.ModalBody>
                    <Textfield placeholder='Nome'/>
                    <S.Row>
                        <Textfield placeholder='Valor' label='Valor'/>
                        <Textfield placeholder='Data' label='Data' type='date'/>
                        <SelectField placeholder='Tipo' label='Tipo' options={[{label: 'Entrada', value: 'debit'}]}/>
                    </S.Row>

                    <S.Row>
                        <SelectField placeholder='Categoria' label='Categoria' options={[]}/>
                        <SelectField placeholder='Subcategoria' label='Subcategoria' options={[]}/>
                    </S.Row>

                    <Textfield placeholder='Descrição' type='textarea'/>
                </S.ModalBody>

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