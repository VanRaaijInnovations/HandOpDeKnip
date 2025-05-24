import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonButton, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-bank-account',
  templateUrl: './add-new-bank-account.page.html',
  styleUrls: ['./add-new-bank-account.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonInput, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddNewBankAccountPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveBankAccount(): void {

  }

  cancel(): void {
    this.router.navigate(['tabs/settings/bank-accounts']);
  }
}
