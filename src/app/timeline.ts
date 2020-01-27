import {Cards} from './Cards';
export interface Timeline {
  id: number;
  name: string;
  creationDate: string;
  updateDate: string;
  category: string;
  cardList: Cards [];

}
