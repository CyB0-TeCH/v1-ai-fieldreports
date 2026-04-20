export class FirestorePermissionError extends Error {
  constructor(context: any) {
    super('Missing or insufficient permissions: Request denied by Firestore Security Rules.');
    this.name = 'FirebaseError';
  }
}
