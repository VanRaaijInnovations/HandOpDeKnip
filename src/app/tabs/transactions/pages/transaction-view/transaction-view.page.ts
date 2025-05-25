import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITransaction } from 'src/app/interfaces/transaction.interface';
import { select, Store } from '@ngrx/store';
import { ITransactionsState } from 'src/app/interfaces/transactions-state.interface';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.page.html',
  styleUrls: ['./transaction-view.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TransactionViewPage implements OnInit {

  transaction?: ITransaction

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ transactionsState: ITransactionsState }>,
  ) {
    
  }

  ngOnInit() {
    const transactionId = this.route.snapshot.paramMap.get('id');
    this.store.select(state => state.transactionsState).subscribe(transactionsState => {
      this.transaction = transactionsState.transactions.find(t => t.id === transactionId);
    });
  }
}
