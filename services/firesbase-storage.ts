// Create a Utility Class which manages the Firebase Storage
// It should only be used to Handle images only (for now)
// It must perform all possible operations on the Firebase Storage
// It must be able to upload, download, delete, and update images
// It must be able to handle all possible errors

import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import {firebaseStorage} from '@/config/firebase'

export class FirebaseStorageService {
    storage = firebaseStorage;
    constructor() {
    }

    async uploadFile(file: File, rootFolderPath: string): Promise<string> {
        // Generate a document ID
        const randomId = Math.random().toString(36).substring(2, 8);

        // Create a path using the root folder path and the generated document ID
        const path = `${rootFolderPath}/${randomId}`;

        const storageRef = ref(this.storage, path);
        await uploadBytes(storageRef, file);
        return path;
    }

    async downloadFile(path: string) {
        const storageRef = ref(this.storage, path);
        const url = await getDownloadURL(storageRef);
        return url;
    }

    async deleteFile(path: string) {
        const storageRef = ref(this.storage, path);
        await deleteObject(storageRef);
    }
}