export const setToStorage = (key: string, val: any) => window.localStorage.setItem(key, val);
export const getFromStorage = (key: string) => window.localStorage.getItem(key);