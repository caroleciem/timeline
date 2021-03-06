import { Injectable } from '@angular/core';
import { Cards } from './Cards';
import { HttpClient } from '@angular/common/http';
import { Timeline } from './timeline';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DatasService {
  /* timelineLists = [ { "id": 1, "name": "Numérique", "creationDate": "2019-12-11", "updateDate": "2019-12-11", "category": "CNF", "cardList": [ { "id": 1, "name": "Facebook", "date": "2004-02-03", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg", "description": "Invention du plus célèbre réseau social" }, { "id": 2, "name": "Twitter", "date": "2006-03-20", "imageUrl": "https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg", "description": "Le réseau social préféré de D. Trump" }, { "id": 3, "name": "Snapchat", "date": "2011-08-31", "imageUrl": "https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo-Snapchat.png", "description": "Pour ceux qui ont peur que les photos restent ..." }, { "id": 4, "name": "Windows", "date": "1985-11-19", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Windows_1.0_screenshot.png", "description": "Le premier OS de Microsoft" }, { "id": 5, "name": "Web", "date": "1989-03-12", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b2/WWW_logo_by_Robert_Cailliau.svg", "description": "L'invention de Tim Berners Lee" }, { "id": 6, "name": "Amazon", "date": "1994-07-04", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", "description": "Le commerce en ligne" }, { "id": 7, "name": "Apple", "date": "1976-03-31", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", "description": "La marque de Steve !" }, { "id": 8, "name": "Google", "date": "1998-09-03", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", "description": "Le moteur de recherche le plus utilisé en Europe" } ] }, { "id": 2, "name": "Data", "creationDate": "2019-12-11", "updateDate": "2019-12-11", "category": "Data", "cardList": [] } ];*/
  // cardsFounds : Cards[]=[ { "name": "Facebook", "date": "2004-02-03", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg", "description": "Invention du plus célèbre réseau social" }, { "name": "Twitter", "date": "2006-03-20", "imageUrl": "https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg", "description": "Le réseau social préféré de D. Trump" }, { "name": "Snapchat", "date": "2011-08-31", "imageUrl": "https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo-Snapchat.png", "description": "Pour ceux qui ont peur que les photos restent ..." }, { "name": "Windows", "date": "1985-11-19", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Windows_1.0_screenshot.png", "description": "Le premier OS de Microsoft" }, { "name": "Web", "date": "1989-03-12", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b2/WWW_logo_by_Robert_Cailliau.svg", "description": "L'invention de Tim Berners Lee" }, { "name": "Amazon", "date": "1994-07-04", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", "description": "Le commerce en ligne" }, {"name": "Apple", "date": "1976-03-31", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", "description": "La marque de Steve !" }, { "name": "Google", "date": "1998-09-03", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", "description": "Le moteur de recherche le plus utilisé en Europe" } ];

  cards: Cards[] = [];
  cardsFounds: Cards[] = [];
  timelineLists: Timeline[];
  timelineAMod: Timeline;
  cardList: Cards[] = [];
  index: number;
  cardIndex: Cards;
  indexAMod;
  cardAMod: Cards;
  maxId: number;
  // tslint:disable-next-line:max-line-length
  endOfGameCard: Cards = { id: 0, name: 'BRAVO !!!', date: '', imageUrl: 'https://previews.123rf.com/images/vectorshowstudio/vectorshowstudio1608/vectorshowstudio160800408/61234649-vector-troph%C3%A9e-champion-tasse-ic%C3%B4ne-plat-champion-vainqueur-de-la-coupe-attribution-du-troph%C3%A9e-et-le-prix-d.jpg', description: 'Vous avez deviné toutes les dates !!'};

  constructor(
    private httpClient: HttpClient,
  ) { this.getTimelines(); }


  supprimerTimeline(timelineId: number) {
    timelineId++;
    this.timelineLists.splice(timelineId, 1);
    return this.httpClient.delete<number>('http://localhost:8080/api/timeline/' + timelineId);
  }

  updateTimelineAMod(timelineAMod) {
    return this.httpClient.put<Timeline>('http://localhost:8080/api/timeline/', timelineAMod);
  }


  getTimelines(): Observable<Timeline[]> {
    return this.httpClient.get<Timeline[]>('http://localhost:8080/api/timeline');
      //.pipe(
      //  tap(timelineLists => this.timelineLists = timelineLists)
      //);
  }

  getCardList(cardList) {
    this.cardList = cardList;
    this.affichageCards(cardList.length);
  }

  renewCard() {
    return this.affichageCards(this.cardList.length);
  }

  affichageCards(max) {
    if (max !== 0) {
      this.index = Math.floor(Math.random() * Math.floor(max));
      this.cardIndex = this.cardList[this.index];
      return this.cardIndex;
    } else {
      return this.endOfGameCard;
    }
  }

  majCards(card: Cards) {
    this.timelineAMod.cardList.splice(this.indexAMod, 1, this.cardAMod);
  }

  ajCards(card: Cards) {
    this.timelineAMod.cardList.push(card);
    alert('la carte a bien été ajoutée');
  }

  chercheIdMax() {
    this.maxId = this.timelineAMod.cardList.length;
    return this.maxId;
  }
}
