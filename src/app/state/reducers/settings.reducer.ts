import { createReducer, on } from '@ngrx/store';
import { ISettings } from '../../interfaces/settings.interface';
import * as SettingsActions from '../actions/settings.actions';

export const initialSettingsState: ISettings = {
  currency: 'EUR',
  privateKeyPassword: undefined,
  salt: undefined
};

export const settingsReducer = createReducer(
  initialSettingsState,
  on(SettingsActions.setSettings, (state, { settings }) => ({ ...state, ...settings })),
  on(SettingsActions.updateCurrency, (state, currency ) => ({
    ...state,
    currency: currency.currency
  })),
  on(SettingsActions.setPrivateKeyPassword, (state, { privateKeyPassword, salt }) => ({
    ...state,
    privateKeyPassword,
    salt
  })),
)
