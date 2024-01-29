import { CardInterface } from '../../../../common/types';
import * as S from './styles'

export function Card({title, description, hour, date, value, backgroundColor, textColor}: CardInterface){
    return (
    <S.Body backgroundColor={backgroundColor} textColor={textColor}>
        <S.Title textColor={textColor}>{title}</S.Title>
        {description && <S.Description>Descrição{description}</S.Description>}
        {hour && <S.Description>Horário: {hour}</S.Description>}
        {date && <S.Description>Data: {date}</S.Description>}
        {value && <S.Description>Valor: {value}</S.Description>}
    </S.Body>);
}