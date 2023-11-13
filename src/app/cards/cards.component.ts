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

  cardItem = {
    id: 1,
    name: 'Nevfel Gökberk Özdeniz',
    title: 'Frontend Developer',
    phone: '0539 677 4753',
    email: 'nevfelo@gmail.com',
    website: 'https://github.com/nevfelozdeniz',
    city: 'Çorlu, Tekirdağ'
  };

  //4800
  constructor(public dialog: MatDialog,
    public cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards();
  }

  openAddCardModal(): void {
    this.dialog.open(CardModalComponent, {
      width: '400px'
    });

  }


}
