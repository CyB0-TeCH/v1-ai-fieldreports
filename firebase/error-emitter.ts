import { FirestorePermissionError } from './errors';
export const errorEmitter = {
  on: (event: string, callback: Function) => {},
  emit: (event: string, data: any) => {}
};
