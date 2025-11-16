import { Injectable, inject } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Store } from '@ngrx/store';
import { AES } from 'crypto-js';
import { firstValueFrom, take } from 'rxjs';
import CryptoJS from 'crypto-js';
import * as SettingsSelectors from 'src/app/state/selectors/settings.selectors';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  readonly AppDir = '/HandOpDeKnip/storage'
  private store = inject(Store);

  constructor() {
    Filesystem.checkPermissions().then((result) => {
      if (result.publicStorage === 'denied') {
        console.warn('Public storage permissions denied, requesting permissions...');
        Filesystem.requestPermissions();
      } else {
        Filesystem.mkdir({
          directory: Directory.Data,
          recursive: true,
          path: this.AppDir
        }).then(() => {
          console.debug('App directory created successfully:', this.AppDir);
        }).catch((error) => {
          if (error.name !== 'AlreadyExistsError') {  // Ignore if the directory already exists
            console.warn('Error creating app directory:', error);
          }
        });

        console.debug('Public storage permissions granted');
      }
    }).catch((error) => {
      console.error('Error checking filesystem permissions:', error);
    });
  }

  async saveState<Type>(object: Type, fileName: string): Promise<void> {
    try {
      const passwordHash = await firstValueFrom(this.store.select(SettingsSelectors.selectPrivateKeyPassword).pipe(take(1)));
      if (!passwordHash) {
        return;
      }

      const encryptedData = AES.encrypt(JSON.stringify(object), passwordHash).toString();

      let res = await Filesystem.writeFile({
        directory: Directory.Data,
        path: `${this.AppDir}/${fileName}`,
        data: encryptedData,
        encoding: Encoding.UTF8
      });
      console.debug('State saved successfully:', res);
    } catch (error) {
      console.error('Error saving state:', error);
      return;
    }
  }

  async loadState<Type>(fileName: string): Promise<Type | undefined> {
    try {
      const encryptedData = await Filesystem.readFile({
        directory: Directory.Data,
        path: `${this.AppDir}/${fileName}`,
        encoding: Encoding.UTF8
      })

      const passwordHash = await firstValueFrom(this.store.select(SettingsSelectors.selectPrivateKeyPassword));

      if (!passwordHash) {
        return;
      }

      let decryptedData = AES.decrypt(encryptedData.data.toString(), passwordHash).toString(CryptoJS.enc.Utf8);
      console.debug(`Fetched ${fileName}:`, decryptedData)
      return JSON.parse(decryptedData) as Type;
    } catch (error) {
      console.error('Error loading state:', error);
      return;
    }
  }

  async clearStorage(): Promise<void> {
    try {
      await Filesystem.rmdir({
        directory: Directory.Data,
        path: this.AppDir,
        recursive: true
      })

      console.debug("Storage cleared!")
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}
