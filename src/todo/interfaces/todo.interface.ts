export interface TodoInterface {
    id: number| string;
    title: string;
    completed: boolean;
    deleted: boolean;
}

export interface TodoUpdateInterface{
    title: string;
    completed: boolean;
    deleted: boolean;
}