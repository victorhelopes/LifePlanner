
import { Card } from '../Card';
import { Button } from '../Button';

import { IDataBoard } from './types';

import * as S from './styles'
import { ICard } from '../../common/types';

export function DataBoard({title, buttonTitle, infos, buttonColor, boardType, loading, buttonAction, edit, remove}: IDataBoard){
    const cardRender = (info: ICard) =>{
        return(<Card 
            _id={info._id}
            title={info.title} 
            description={info.description}
            date={info.date}
            value={info.value}
            backgroundColor={info.backgroundColor} 
            textColor={info.textColor}
            remove={remove ?  ()=>{remove(info._id)} : undefined}
            edit={edit? ()=>{ edit(info._id)} : undefined}
        />)
    }
    
    return (
    <S.Body>
        <S.Title>{title}</S.Title>

        {boardType === 'checklist' && infos.map(item=>{
            return (
                <S.Row>
                    <input type='checkbox'/>
                    {cardRender(item)}
                </S.Row>
            )
        })}

        {boardType === 'infos' && infos.map(item=>{
            return (
                <S.Row>
                    {cardRender(item)}
                </S.Row>
            )
        })}

        {boardType === 'timelineActivities' && infos.map(item=>{
            return (
                <S.Row>
                    <S.TimeLine>
                        <div className="dot"></div>
                        <S.Line/>
                    </S.TimeLine>
                    {cardRender(item)}
                </S.Row>
            )
        })}

       {buttonTitle&&  <Button 
            placeholder={buttonTitle}
            backgroundColor={buttonColor || "--primary-color"} 
            textColor="--white-color"
            loading={loading}
            onClick={buttonAction}
        />}
    </S.Body>);
}