import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards!: Card[];

  constructor(
    @Inject('apiUrl') private apiUrl: string, //app.module.ts de ki provide dan geliyor.
    private http: HttpClient,

  ) { }

  getCards(): void {

    this.http.get<Card[]>(this.apiUrl + '/users')
      .subscribe((res: Card[]) => {
        this.cards = res;
      })

  }

  addCard(card: Card): Observable<any> {
    return this.http.post(this.apiUrl + '/users', card)
  }

  updateCard(card: Card, cardId: number): Observable<any> { //dakika 1:18:00 değişecek. şuan için işlevsiz
    return this.http.put(this.apiUrl + '/users', card)
  }

  deleteCard(cardId: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/cards/')
  }
}
