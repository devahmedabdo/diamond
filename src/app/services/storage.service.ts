import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  storageItem(key: string, item: string) {
    window.localStorage.setItem(key, item);
  }
  getStoredItem(key: string) {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  }
  removeStoredItem(key: string) {
    window.localStorage.removeItem(key);
  }
}
