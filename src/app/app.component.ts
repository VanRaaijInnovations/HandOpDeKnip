import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { ISettings } from './interfaces/settings.interface.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private store: Store<{ settings: ISettings }>,
    private router: Router
  ) {
  }

  async ngOnInit(): Promise<void> {
    // get private key password from state
    this.store.select(state => state.settings).subscribe((settings: ISettings) => {
      if (!settings.privateKeyPassword) {
        this.router.navigate(['/authenticate']);
      }
    });
  }
}
