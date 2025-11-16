import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISettings } from '../../interfaces/settings.interface';

export const selectSettingsFeature = createFeatureSelector<ISettings>('settings');

export const selectCurrency = createSelector(
  selectSettingsFeature,
  (settings: ISettings) => settings.currency
);

export const selectPrivateKeyPassword = createSelector(
  selectSettingsFeature,
  (settings: ISettings) => settings.privateKeyPassword
);

export const selectHasPassword = createSelector(
  selectPrivateKeyPassword,
  (password: string | undefined) => !!password
);
