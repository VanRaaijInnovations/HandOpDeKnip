import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ISettings } from 'src/app/interfaces/settings.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/infrastructure/storage.service.js';
import * as SettingsActions from 'src/app/state/actions/settings.actions';
import * as SettingsSelectors from 'src/app/state/selectors/settings.selectors';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonContent, IonSelect, IonSelectOption],
})
export class SettingsPage {
  $currency: Observable<string>;
  private router = inject(Router);
  private store = inject(Store);
  private storageService = inject(StorageService);

  constructor() {
    this.$currency = this.store.select(SettingsSelectors.selectCurrency);
  }

  saveCurrency(event: CustomEvent): void {
    this.store.dispatch(SettingsActions.updateCurrency({ currency: event.detail.value }));
  }

  openPage(page: string): void {
    this.router.navigate([`${page}`]);
  }

  async clearStorage(): Promise<void> {
    await this.storageService.clearStorage();
  }
}
