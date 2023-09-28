import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards!: Card[];
  cardItem = {
    name: 'Nevfel Gökberk Özdeniz',
    title: 'Frontend Developer',
    phone: '0539 677 4753',
    email: 'nevfelo@gmail.com',
    website: 'https://github.com/nevfelozdeniz',
    city: 'Çorlu, Tekirdağ'
  };

  //Dakika 48:00 de kaldın
  constructor(public dialog: MatDialog,
    private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  openAddCardModal(): void {
   const dialog = this.dialog.open(CardModalComponent, {
      width: '400px'
    });

    dialog.afterClosed().subscribe( res=>{
      console.log(res)
    })
  }

  getCards():void { // subscribe ve res crystal clear değil.
    this.cardService.getCards().subscribe((res: Card[]) => {
      // console.log(res);
        this.cards = res;
    })
  }
}
