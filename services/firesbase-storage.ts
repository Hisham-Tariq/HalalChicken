// Create a Utility Class which manages the Firebase Storage
// It should only be used to Handle images only (for now)
// It must perform all possible operations on the Firebase Storage
// It must be able to upload, download, delete, and update images
// It must be able to handle all possible errors

import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { firebaseStorage } from '@/config/firebase'
import { FirestoreUploadedFile } from "@/types/upload-file"

export class FirebaseStorageService {
    storage = firebaseStorage;
    constructor() {
    }

    /**
     * Uploads a file to Firebase Storage using the given file and root folder path.
     * @param file The file to upload.
     * @param rootFolderPath The root folder path to upload the file to.
     * @returns A Promise that resolves with an object containing the path and download URL of the uploaded file.
     */
    async uploadFile(file: File, rootFolderPath: string): Promise<FirestoreUploadedFile> {
        // Generate a document ID
        const randomId = Math.random().toString(36).substring(2, 8);

        // Create a path using the root folder path and the generated document ID
        const path = `${rootFolderPath}/${randomId}`;

        const storageRef = ref(this.storage, path);
        await uploadBytes(storageRef, file);

        // Return an object containing the path and the download URL
        const downloadURL = await getDownloadURL(storageRef);
        return {
            path,
            downloadURL
        };
    }


    /**
     * Downloads a file from Firebase Storage using the given path.
     * @param path The path of the file to download.
     * @returns A Promise that resolves with the download URL of the file.
     */
    async downloadFile(path: string): Promise<string> {
        // Get a reference to the file in Firebase Storage using the given path
        const storageRef = ref(this.storage, path);

        // Get the download URL of the file
        const url = await getDownloadURL(storageRef);

        // Return the download URL
        return url;
    }

    /**
     * Deletes a file from Firebase Storage using the given path.
     * @param path The path of the file to delete.
     * @returns A Promise that resolves when the file has been successfully deleted.
     */
    async deleteFile(path: string): Promise<void> {
        // Get a reference to the file in Firebase Storage using the given path
        const storageRef = ref(this.storage, path);

        // Delete the file from Firebase Storage
        await deleteObject(storageRef);
    }

}