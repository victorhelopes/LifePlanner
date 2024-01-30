import { CardInterface } from "../../common/types";

export interface DataBoardInterface {
    title: string;
    buttonTitle: string;
    infos: CardInterface[];
    boardType: 'infos' | 'checklist' | 'timelineActivities';
    buttonColor: string;
    buttonAction: ()=> void;
 }