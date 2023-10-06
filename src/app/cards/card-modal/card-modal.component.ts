import { Component, Inject, OnInit, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CardModalComponent>,
    private fb: FormBuilder,
    private cardService: CardService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) {

  }

  ngOnInit(): void {
    console.log(this.data);
    this.cardForm = this.fb.group({
      name: [this.data?.name || '', Validators.maxLength(50)],
      title: [this.data?.title || '', [Validators.required, Validators.maxLength(50)]],
      phone: [this.data?.phone || '', [Validators.required, Validators.maxLength(50)]],
      email: [this.data?.email || '', [Validators.email, Validators.maxLength(50)]],
      website: [this.data?.website || '', Validators.maxLength(50)],
      city: [this.data?.address?.city || '', Validators.maxLength(100)]
    });
  }

  addCard(): void {
    // console.log(this.cardForm.value);
    this.cardService.addCard(this.cardForm.value).subscribe((res: any) => {
      console.log(res);
      this._snackBar.open('Kartvizit Eklendi.', 'Kapat');
      this.cardService.getCards();
      this.dialogRef.close();
    });

  }

  updateCard(): void {

    this.cardService.updateCard(this.cardForm.value, this.data.id).subscribe((res: any) => {
      console.log(res);
    });
    this._snackBar.open('Kartvizit başarıyla güncellendi.', 'Kapat');
    this.cardService.getCards();
    this.dialogRef.close();
  }

  deleteCard(): void {
    this.cardService.deleteCard(this.data.id)
      .subscribe((res: any) => {
      });
    this._snackBar.open('Kartvizit başarıyla silindi.', 'Kapat');
    this.cardService.getCards();
    this.dialogRef.close();
  }
}



// Dakika 01:07:40 ta kaldın.