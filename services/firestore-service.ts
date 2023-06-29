 // This code defines an abstract class for a Firestore service that provides methods for adding, updating, and deleting documents in a Firestore collection, as well as fetching all documents and managing the service's state using Zustand.
// Abstract Class for a Firestore Service
import {
    CollectionReference, deleteDoc,
    doc,
    DocumentData,
    FirestoreDataConverter, onSnapshot, query,
    setDoc,
} from "firebase/firestore";
import {createStore, StoreApi, useStore} from "zustand";
import {GenericConverter} from "@/converters/generic-converter";

/**
 * Abstract Class for a Firestore Service
 * @template State The type of the service's state.
 * @template CollectionType The type of the Firestore collection.
 */
export abstract class FirestoreService<State extends { data: CollectionType[] }, CollectionType extends {
    id?: string
}> {
    /**
     * Firestore collection reference.
     */
    protected _collectionRef: CollectionReference<CollectionType>;
    /**
     * Zustand store for managing the service's state.
     */
    protected _store: StoreApi<State>;
    /**
     * A function that can be used to access the service's state.
     */
    private readonly useServiceStore;

    /**
     * Creates a new instance of the FirestoreService class.
     * @param collectionRef The Firestore collection reference.
     * @param initialState The initial state of the service.
     */
    protected constructor(collectionRef: CollectionReference<DocumentData>, initialState: State) {
        this._collectionRef = collectionRef.withConverter(new GenericConverter<CollectionType>());
        this._store = createStore<State>((set) => initialState);
        this.useServiceStore = (selector: (state: State) => unknown) => useStore(this._store, selector)
    }

    /**
     * Gets the Firestore collection reference.
     */
    protected get collectionRef(): CollectionReference<CollectionType> {
        return this._collectionRef;
    }

    /**
     * Gets the Zustand store for managing the service's state.
     */
    public get store() {
        return this.useServiceStore;
    }

    /**
     * Gets the service's state.
     */
    public get state(): State {
        return this._store.getState();
    }

    /**
     * Add a new document to the Firestore collection.
     * @param data The data to add to the Firestore collection.
     * @returns The ID of the newly added document.
     */
    public async add(data: CollectionType): Promise<string> {
        const docRef = doc(this.collectionRef);
        await setDoc(docRef, data);
        return docRef.id;
    }

    /**
     * Update a document in the Firestore collection.
     * @param id The ID of the document to update.
     * @param data The data to update the document with.
     */
    public async update(id: string, data: Partial<CollectionType>): Promise<void> {
        const docRef = doc(this.collectionRef, id);
        return setDoc(docRef, data, {merge: true});
    }

    /**
     * Delete a document from the Firestore collection.
     * @param item: The item which should be deleted.
     * @returns A promise that resolves when the document has been deleted.
     */
    public async delete(item: CollectionType): Promise<void> {
        const docRef = doc(this.collectionRef, item.id!);
        return deleteDoc(docRef);
    }

    /**
     * Fetch all documents from the Firestore collection.
     * @returns A promise that resolves when all documents have been fetched.
     * @protected
     * @async
     * @memberof FirestoreService
     */
    protected fetchAll(onChange?: (items: CollectionType[]) => Partial<State>): void {
        const q = query(this.collectionRef);
        // Subscribe to changes in the collection
        onSnapshot(
            q,
            {includeMetadataChanges: true},
            (querySnapshot) => {
                const data: CollectionType[] = [];
                querySnapshot.forEach((doc) => {
                    data.push(doc.data());
                });

                let newPartialState = {}
                if (onChange) newPartialState = onChange(data);
                // Update the state with latest data
                this._store.setState({
                    ...newPartialState,
                    data: data,
                } as Partial<State>);
            });
    }
}
