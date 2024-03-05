export interface ICard {
    _id: string;
    title: string;
    backgroundColor?: string;
    textColor?: string;
    description?: string;
    date?: string;
    value?: string;
    edit?: ()=>void;
    remove?: ()=>void;
}

export interface InavbarItem{
    icon: string;
    iconType: string;
    title: string;
    link: string;
}

export interface IModal{
    title?: string;
    closeModal: ()=>void;
    confirmAction?: ()=> void;
}

export interface ITask{
    title: string;
    description: string;
    expectDurationInMinutes: string;
    repeatNumber: string;
    sharedWith: string;
    taskInfos: TaskInfos[]
}

export interface TaskInfos{
    duration: number;
    time: number;
    date: Date;
    status: string;
    observation: string;
}