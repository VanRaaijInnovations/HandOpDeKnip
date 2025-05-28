import { Injectable, Type } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  readonly AppDir = '/HandOpDeKnip/storage'

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
          console.log('App directory created successfully:', this.AppDir);
        }).catch((error) => {
          if (error.name !== 'AlreadyExistsError') {  // Ignore if the directory already exists
            console.warn('Error creating app directory:', error);
          }
        });

        console.log('Public storage permissions granted');
      }
    }).catch((error) => {
      console.error('Error checking filesystem permissions:', error);
    });
  }

  async saveState<Type>(object: Type, fileName: string): Promise<void> {
    try {
      const data = JSON.stringify(object);
      let res = await Filesystem.writeFile({
        directory: Directory.Data,
        path: `${this.AppDir}/${fileName}.json`,
        data: data,
        encoding: Encoding.UTF8
      });
      console.log('State saved successfully:', res);
    } catch (error) {
      console.error('Error saving state:', error);
      return;
    }
  }

  async loadState<Type>(fileName: string): Promise<Type | null> {
    try {
      let res = await Filesystem.readFile({
        directory: Directory.Data,
        path: `${this.AppDir}/${fileName}.json`,
        encoding: Encoding.UTF8
      })

      return JSON.parse(res.data as string) as Type;
    } catch (error) {
      console.error('Error loading state:', error);
      return null;
    }
  }

  async clearStorage(): Promise<void> {
    try {
      await Filesystem.rmdir({
        directory: Directory.Data,
        path: this.AppDir,
        recursive: true
      })
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}
