import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";

@Injectable()
export class PasswordGuard implements CanActivate {
  constructor(
    private store: Store<{ settings: { privateKeyPassword: string } }>,
    private router: Router
  ) {}

  hasPassword(): Observable<boolean> {
    return this.store.select(state => !!state.settings.privateKeyPassword);
  }

  canActivate(): Observable<boolean> {
    return this.hasPassword().pipe(
      map(hasPassword => {
        if (!hasPassword) {
          // Redirect to the authentication page if no password is set
          this.router.navigate(['/authenticate']);
        }
        return hasPassword;
      }
    ));
  }
}
