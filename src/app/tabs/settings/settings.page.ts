import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ISettings } from 'src/app/interfaces/settings.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/infrastructure/storage.service.js';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonContent, IonSelect, IonSelectOption],
})
export class SettingsPage {
  $currency: Observable<string>;

  constructor(
    private router: Router,
    private store: Store<{ settings: ISettings }>,
    private storageService: StorageService
  ) {
    this.$currency = this.store.select(state => state.settings.currency);
  }

  saveCurrency(event: CustomEvent): void {
    this.store.dispatch({
      type: '[Settings] Update Currency',
      currency: event.detail.value
    });
  }

  openPage(page: string): void {
    this.router.navigate([`${page}`]);
  }

  async clearStorage(): Promise<void> {
    await this.storageService.clearStorage();
  }
}
