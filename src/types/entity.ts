export interface Ibook {
  _id?: string;
  name: string;
  description: string;
  isbn: string;
  author: string;
  file: null | FileList | string;
  isAvailable?: boolean;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}
