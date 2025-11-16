import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { IBankAccount } from 'src/app/interfaces/bank-account.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as BankAccountSelectors from 'src/app/state/selectors/bank-account.selectors';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.page.html',
  styleUrls: ['./bank-accounts.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonContent, IonLabel]
})
export class BankAccountsPage {

  $connectedBankAccounts: Observable<IBankAccount[]>;
  private store = inject(Store);
  private router = inject(Router);

  constructor() { 
    this.$connectedBankAccounts = this.store.select(BankAccountSelectors.selectAllBankAccounts);
  }

  addBankAccount(): void {
    this.router.navigate(['tabs/settings/bank-accounts/add-new-bank-account']);
  }
}
