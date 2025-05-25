import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
  IonButton,
  IonFooter,
  IonActionSheet,
  IonText,
  IonSearchbar,
  IonProgressBar,
  IonDatetimeButton,
  IonModal,
  IonDatetime
} from '@ionic/angular/standalone';
import { map, Observable } from 'rxjs';
import { ITransaction } from 'src/app/interfaces/transaction.interface';
import { Store } from '@ngrx/store';
import { addIcons } from 'ionicons';
import { addOutline, removeOutline } from 'ionicons/icons';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import type { OverlayEventDetail } from '@ionic/core';
import { Buffer } from 'buffer';
import { ISettings } from 'src/app/interfaces/settings.interface.js';

@Component({
  selector: 'app-transactions',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
  imports: [
    IonDatetimeButton,
    IonProgressBar,
    IonSearchbar,
    IonActionSheet,
    IonFooter,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    IonText,
    IonModal,
    IonDatetime
  ],
})
export class TransactionsPage {
  public actionSheetButtons = [
    {
      text: 'Import transactions (TXT/TAB)',
      data: {
        action: 'import',
      },
    },
    {
      text: 'Add transaction',
      data: {
        action: 'add',
      },
    },
  ];

  // Start date is first of the month, end date is last of the month
  startDate: string = new Date(new Date().getFullYear(), new Date().getMonth(), 2).toISOString();
  endDate: string = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString();

  loading: boolean = false;
  currency: string = 'EUR';
  $transactions: Observable<ITransaction[]>;

  constructor(
    private store: Store<{ transactions: ITransaction[]; settings: ISettings }>
  ) {
    addIcons({ addOutline, removeOutline });
    this.store.select('settings').subscribe((settings) => {
      this.currency = settings.currency;
    });
    this.$transactions = this.store.select('transactions');
  }

  decodeBase64(str: string): string {
    try {
      return Buffer.from(str, 'base64').toString('binary');
    } catch (e) {
      console.error('Error decoding base64 string:', e);
      return str; // Return the original string if decoding fails
    }
  }

  actionPicked(event: CustomEvent<OverlayEventDetail>): void {
    const action = event.detail.data.action;
    if (action === 'import') {
      this.importTransactions();
    } else if (action === 'add') {
      this.addTransactions();
    }
  }

  addTransactions(): void {}

  async importTransactions(): Promise<void> {
    try {
      const result = await FilePicker.pickFiles({
        types: ['text/plain', 'text/tab-separated-values'],
        limit: 1,
        readData: true,
      });
      if (result.files && result.files.length > 0) {
        const file = result.files[0];
        // TODO: Process the CSV file here (file.name, file.path, file.mimeType, file.data)
        console.log('Selected file:', file);

        if (file.data) {
          const decodedData = this.decodeBase64(file.data);
          console.log('Decoded file data:', decodedData);
        }
      }
    } catch (error: any) {
      if (error && error.message !== 'User cancelled') {
        console.error('File picking failed:', error);
      }
    }
  }

  updateStartDate(event: CustomEvent): void {
    this.startDate = event.detail.value;
    this.$transactions = this.store.select('transactions').pipe(
      map(transactions =>
        transactions.filter(transaction => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= new Date(this.startDate) && transactionDate < new Date(this.endDate);
        })
      )
    );
  }

  updateEndDate(event: CustomEvent): void {
    this.endDate = event.detail.value;
    this.$transactions = this.store.select('transactions').pipe(
      map(transactions =>
        transactions.filter(transaction => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= new Date(this.startDate) && transactionDate < new Date(this.endDate);
        })
      )
    );
  }
}
