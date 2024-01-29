import { Button } from '../../../../components/Button';
import { Card } from '../Card';
import * as S from './styles'
import { DataBoardInterface } from './types';

export function DataBoard({title, buttonTitle, infos, buttonColor, boardType, buttonAction}: DataBoardInterface){
    return (
    <S.Body>
        <S.Title>{title}</S.Title>

        {boardType === 'checklist' && infos.map(item=>{
            return (
                <S.Row>
                    <input type='checkbox'/>
                    <Card 
                        title={item.title} 
                        description={item.description}
                        hour={item.hour}
                        date={item.date}
                        value={item.value}
                        backgroundColor={item.backgroundColor} 
                        textColor={item.textColor}
                    />
                </S.Row>
            )
        })}

        {boardType === 'infos' && infos.map(item=>{
            return (
                <S.Row>
                    <Card 
                        title={item.title} 
                        description={item.description}
                        hour={item.hour}
                        date={item.date}
                        value={item.value}
                        backgroundColor={item.backgroundColor} 
                        textColor={item.textColor}
                    />
                </S.Row>
            )
        })}

        {boardType === 'timelineActivities' && infos.map(item=>{
            return (
                <S.Row>
                    <S.TimeLine>
                        <div className="dot"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="63" viewBox="0 0 2 63" fill="none">
                            <path d="M1 63L1 1.96695e-06" stroke="#4051E6" stroke-width="2"/>
                        </svg>
                    </S.TimeLine>

                    <Card 
                        title={item.title} 
                        description={item.description}
                        hour={item.hour}
                        date={item.date}
                        value={item.value}
                        backgroundColor={item.backgroundColor} 
                        textColor={item.textColor}
                    />
                </S.Row>
            )
        })}

        <Button 
            placeholder={buttonTitle}
            backgroundColor={buttonColor || "--primary-color"} 
            textColor="--white-color"
            onClick={buttonAction}
        />
    </S.Body>);
}