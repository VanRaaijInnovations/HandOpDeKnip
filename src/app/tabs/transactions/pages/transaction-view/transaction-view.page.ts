import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITransaction } from 'src/app/interfaces/transaction.interface';
import { Store } from '@ngrx/store';
import localeNl from '@angular/common/locales/nl';
import * as SettingsSelectors from 'src/app/state/selectors/settings.selectors';
import * as TransactionSelectors from 'src/app/state/selectors/transaction.selectors';

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
  $currency: Observable<string>;
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  constructor() {
    this.$currency = this.store.select(SettingsSelectors.selectCurrency);
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const transactionId = params.get('transactionId');
      if (transactionId) {
        this.$transaction = this.store.select(TransactionSelectors.selectTransactionById(transactionId));
      }
    });
  }
}
