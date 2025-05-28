import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonInputPasswordToggle } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { ISettings } from 'src/app/interfaces/settings.interface.js';
import { PBKDF2 } from 'crypto-js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
  standalone: true,
  imports: [IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInputPasswordToggle]
})

export class AuthenticatePage {

  private readonly saltRounds = 10;

  constructor(
    private store: Store<{ settings: ISettings }>,
    private router: Router
  ) { }

  randomString(length: number) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  async savePassword(event: CustomEvent): Promise<void> {
    const salt = "my little pony"  //TODO: make this random -> this.randomString(128);
    const hash = PBKDF2(event.detail.value, salt, {
      iterations: 100
    }).toString();

    this.store.dispatch({
      type: '[Settings] Set Private Key Password',
      privateKeyPassword: hash,
      salt
    });

    this.router.navigate(['tabs'])
  }
}
