import { ICard } from "../../common/types";

export interface IDataBoard {
    title: string;
    buttonTitle?: string;
    infos: ICard[];
    boardType: 'infos' | 'checklist' | 'timelineActivities';
    buttonColor: string;
    loading: boolean;
    buttonAction: ()=> void;
    edit?: (value: string)=>void;
    remove?: (value: string)=>void;
 }