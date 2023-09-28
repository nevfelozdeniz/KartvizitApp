import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!: FormGroup;

  constructor(
    private dialogRef:MatDialogRef<CardModalComponent>,
    private fb: FormBuilder,
    private cardService:CardService,
    private _snackBar :MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: ['', Validators.maxLength(50)],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.email,Validators.maxLength(50)]],
      website: ['', Validators.maxLength(50)],
      city: ['', Validators.maxLength(100)]
    });
  }

  addCard(): void {
    // console.log(this.cardForm.value);
    this.cardService.addCard(this.cardForm.value).subscribe((res:any)=>{
      console.log(res);


        this._snackBar.open('Kartvizit Eklendi.','Kapat');

      this.dialogRef.close();
    })
  }

}



// Dakika 01:07:40 ta kaldın.