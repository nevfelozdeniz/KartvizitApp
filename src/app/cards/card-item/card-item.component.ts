import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() card!: Card;

  constructor() {
  }

  ngOnInit(): void {

  }

}
