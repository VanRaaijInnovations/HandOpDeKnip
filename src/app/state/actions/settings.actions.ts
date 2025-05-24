import { createAction, props } from '@ngrx/store';
import { ISettings } from '../../interfaces/settings.interface';

export const setSettings = createAction(
  '[Settings] Set Settings',
  props<{ settings: ISettings }>()
);

export const updateCurrency = createAction(
  '[Settings] Update Currency',
  props<{ currency: string }>()
);
