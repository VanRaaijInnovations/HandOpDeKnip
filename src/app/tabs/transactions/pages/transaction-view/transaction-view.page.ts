import { Component, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITransaction } from 'src/app/interfaces/transaction.interface';
import { select, Store } from '@ngrx/store';
import { ITransactionsState } from 'src/app/interfaces/transactions-state.interface';
import { ISettings } from 'src/app/interfaces/settings.interface.js';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeNl, 'nl-NL');

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.page.html',
  styleUrls: ['./transaction-view.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TransactionViewPage implements OnInit {

  $transaction?: Observable<ITransaction | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{   transactions: ITransactionsState, settings: ISettings }>,
  ) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const transactionId = params.get('transactionId');
      this.$transaction = this.store.select(state => state.transactions.transactions.find(transaction => transaction.id === transactionId));
    });
  }

  getCurrency(): string {
    let currency: string = 'EUR'; // Default currency
    this.store.select(state => state.settings).subscribe(settings => {
      if (settings && settings.currency) {
        currency = settings.currency;
      }
    });
    return currency;
  }
}
