import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

/**
 * A generic Firestore data converter that can be used to convert Firestore documents to a generic type T.
 * @template T - The generic type that the Firestore documents will be converted to.
 */
export class GenericConverter<T extends { id?: string }> implements FirestoreDataConverter<T> {
    /**
     * Converts a generic type T to Firestore DocumentData.
     * @param data - The generic type T to be converted to Firestore DocumentData.
     * @returns The Firestore DocumentData representation of the generic type T.
     */
    toFirestore(data: T): DocumentData {
        return data
    }

    /**
     * Converts a Firestore QueryDocumentSnapshot to a generic type T.
     * @param snapshot - The Firestore QueryDocumentSnapshot to be converted to a generic type T.
     * @param options - An optional SnapshotOptions object to configure the snapshot.
     * @returns The generic type T representation of the Firestore QueryDocumentSnapshot.
     */
    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options?: SnapshotOptions): T {
        // Convert the Document data to the generic type T
        const data = snapshot.data(options)!;
        return {
            id: snapshot.id,
            ...data
        } as T;
    }
}

//////////////////////////////////////////
// Example Usage of GenericConverter    //
//////////////////////////////////////////

// Define the User interface
// interface User {
//     id: string;
//     name: string;
//     age: number;
// }

// Create a user converter instance
// const userConverter = new GenericConverter<User>();

// Get a reference to the "users" collection
// const usersCollectionRef = collection(db, "users").withConverter(userConverter);

// Get a specific user document by ID
// const userDocRef = doc(usersCollectionRef, "user123");

// Get the user document data as a User type
// const userDocSnapshot = await getDoc(userDocRef);

// Log the user's name
// const user = userDocSnapshot.data();
// console.log(user.name);
