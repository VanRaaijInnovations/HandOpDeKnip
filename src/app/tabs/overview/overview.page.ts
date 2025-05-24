import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.page.html',
  styleUrls: ['overview.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class OverviewPage {
  constructor() {}
}
