import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { IBankAccount } from 'src/app/interfaces/bank-account.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.page.html',
  styleUrls: ['./bank-accounts.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonContent, IonLabel]
})
export class BankAccountsPage implements OnInit {

  $connectedBankAccounts: Observable<IBankAccount[]>;

  constructor(
    private store: Store<{ bankAccounts: IBankAccount[] }>,
    private router: Router
  ) { 
    this.$connectedBankAccounts = this.store.select('bankAccounts');
  }

  ngOnInit() {
  }

  addBankAccount(): void {
    this.router.navigate(['tabs/settings/bank-accounts/add-new-bank-account']);
  }
}
