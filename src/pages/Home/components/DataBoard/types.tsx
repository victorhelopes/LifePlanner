import { CardInterface } from "../../../../common/types";

export interface DataBoardInterface {
    title: string;
    buttonTitle: string;
    infos: CardInterface[];
    boardType: string;
    buttonColor: string;
    buttonAction: ()=> void;
 }