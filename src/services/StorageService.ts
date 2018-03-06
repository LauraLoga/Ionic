export class StorageService {

    localStorage: any;
    constructor() {
    }
    getItem(key){
        return this.localStorage.getItem(key)
            ? JSON.parse(atob(this.localStorage.getItem(key)))
            : undefined;
    }
    setItem(key, value) {
        this.localStorage.setItem(key, btoa(JSON.stringify(value)));
    }
    removeItem(key) {
        if (this.localStorage.getItem(key)) {
            this.localStorage.removeItem(key);
        }
    }
}