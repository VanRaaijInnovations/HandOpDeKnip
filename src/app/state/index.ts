import { ActionReducerMap } from '@ngrx/store';
import { settingsReducer } from './reducers/settings.reducer';
import { ISettings } from '../interfaces/settings.interface';

export interface AppState {
  settings: ISettings;
}

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
};
