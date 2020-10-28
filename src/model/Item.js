import uniqid from 'uniqid';

export class Item{
    id
    value
    type
    constructor(type){
        this.type = type;
        this.id = uniqid();
    }
}