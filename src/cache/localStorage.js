export class LocalStorageService {
  static setItem(key, val) {
    const data = JSON.stringify(val);
    localStorage.setItem(key, data);
  }

  static getItem(key) {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data);
    } catch (err) {
      // todo
    }
  }

  static clearItems() {
    localStorage.clear();
  }
  static iterateItems() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      // eslint-disable-next-line no-console
      console.log(key, value);
    }
  }
}
