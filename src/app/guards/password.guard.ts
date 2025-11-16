import { Injectable, inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import * as SettingsSelectors from "../state/selectors/settings.selectors";

@Injectable()
export class PasswordGuard implements CanActivate {
  private store = inject(Store);
  private router = inject(Router);

  hasPassword(): Observable<boolean> {
    return this.store.select(SettingsSelectors.selectHasPassword);
  }

  canActivate(): Observable<boolean> {
    return this.hasPassword().pipe(
      map((hasPassword: boolean) => {
        if (!hasPassword) {
          // Redirect to the authentication page if no password is set
          this.router.navigate(['/authenticate']);
        }
        return hasPassword;
      })
    );
  }
}
