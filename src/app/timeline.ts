import {Cards}  from './Cards';
export interface Timeline {
    id : Number;
    name: String;
    creationDate :String;
    updateDate :String;
    category:String;
    CardsLists : Cards [];

}
