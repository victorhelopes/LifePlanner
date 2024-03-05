import { ICard } from '../../common/types';
import * as S from './styles'

export function Card({title, description, date, value, backgroundColor, textColor, edit, remove, _id}: ICard){
    function getDate(date: string){
        const dateInfos = new Date(date);
        const day = dateInfos.getDate();
        const month = dateInfos.getMonth();
        const year = dateInfos.getFullYear();

        return `${day}/${month+1 < 10? '0' + (month+1) : month+1}/${year}`
    }

    function getHour(date: string){
        const dateInfos = new Date(date);
        const hour = dateInfos.getHours();
        const minutes = dateInfos.getMinutes()
        return `${hour}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

    return (
    <S.Body backgroundColor={backgroundColor} textColor={textColor}>
        <S.Title textColor={textColor}>
            {title} 
            <S.Actions>
                {edit ? <span className="material-icons-outlined" onClick={edit}>mode_edit</span>: null}
                {remove ? <span className="material-icons-outlined" onClick={remove}>delete</span>: null}
            </S.Actions>
        </S.Title>
        {description && <S.Description>Descrição: {description}</S.Description>}
        {date && <S.Description>Horário: {getHour(date)}</S.Description>}
        {date && <S.Description>Data: {getDate(date)}</S.Description>}
        {value ? <S.Description>Valor: R$ {value}</S.Description> : null}
    </S.Body>);
}