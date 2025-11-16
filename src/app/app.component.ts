import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { ISettings } from './interfaces/settings.interface.js';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import * as SettingsSelectors from './state/selectors/settings.selectors';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, CommonModule],
})
export class AppComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);

  async ngOnInit(): Promise<void> {
    // get private key password from state
    const privateKeyPassword = await firstValueFrom(
      this.store.select(SettingsSelectors.selectPrivateKeyPassword)
    );

    if (!privateKeyPassword) {
      this.router.navigate(['/authenticate']);
    }
  }
}
