import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonContent, IonSelect, IonSelectOption],
})
export class SettingsPage {  
  constructor(
    private router: Router
  ) {}

    openPage(page: string): void {
    this.router.navigate([`${page}`]);
  }
}