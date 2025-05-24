import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { ITransaction } from 'src/app/interfaces/transaction.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
  imports: [IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule]
})
export class TransactionsPage {

  $transactions: Observable<ITransaction[]>;

  constructor(
    private store: Store<{ transactions: ITransaction[] }>
  ) {
    this.$transactions = this.store.select('transactions');
  }

}
