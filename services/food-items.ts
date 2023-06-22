import { FirestoreCollections } from '@/constants/firestore-collections'

import {
    doc,
    setDoc,
    getDocs,
    query,
    where,
    deleteDoc,
    onSnapshot,
    updateDoc,
} from 'firebase/firestore'

import { FirebaseStorageService } from '@/services/firesbase-storage'

import {
    FoodItemType,
    FoodItemTypeWithFile,
    FoodMainCategory,
    FoodSubCategory,
} from '@/types/food-item'

import { createStore, useStore } from 'zustand';

import { GenericConverter } from '@/converters/generic-converter'


export type FoodItemServiceState = {
    foodItems: FoodItemType[];
}


// Service for managing food items
/**
 * Service for managing food items
 */
export class FoodItemsService {
    private static _instance: FoodItemsService;

    // Zustand store for managing food items
    private _store = createStore<FoodItemServiceState>((set) => ({
        foodItems: [],
    }));

    // Root path for Firebase Storage
    private storageRootPath = 'food-items';

    // Firestore collection reference for food items
    private collectionRef = FirestoreCollections.FoodItems.withConverter(new GenericConverter<FoodItemType>());

    // Firebase Storage service for managing food item images
    private storageService = new FirebaseStorageService();

    // Zustand hook for accessing the food items store
    private useItemsStore = (selector: (state: FoodItemServiceState) => unknown) => useStore(FoodItemsService.instance._store, selector);

    // Private constructor to enforce singleton pattern
    private constructor() {
        this.fetchAllFoodItems();
    }

    /**
     * Get the singleton instance of the service
     */
    public static get instance(): FoodItemsService {
        if (!FoodItemsService._instance) {
            console.log("Creating new FoodItemsService Instance")
            FoodItemsService._instance = new FoodItemsService();
        }
        return FoodItemsService._instance;
    }

    public get store() {
        return this.useItemsStore;
    }

    /**
     * Add a new food item
     * @param data - The food item data to add
     */
    async addFoodItem(data: FoodItemTypeWithFile): Promise<void> {
        // Upload the food item image to Firebase Storage
        const uploadedFile = await this.storageService.uploadFile(data.image, this.storageRootPath);

        // Create the food item data object with the uploaded image
        const foodItemData = {
            ...data,
            image: uploadedFile
        } as FoodItemType

        // Add the food item to Firestore
        const docRef = doc(this.collectionRef)
        return setDoc(docRef, foodItemData);
    }

    /**
     * Get all food items by main category
     * @param mainCategory - The main category to filter by
     * @returns An array of food items with the specified main category
     */
    async getFoodItemsByMainCategory(mainCategory: FoodMainCategory): Promise<FoodItemType[]> {
        const querySnapshot = await getDocs(query(this.collectionRef, where('mainCategory', '==', mainCategory)));
        const foodItems: FoodItemType[] = [];
        querySnapshot.forEach((doc) => {
            foodItems.push(doc.data());
        });

        return foodItems;
    }

    /**
     * Get all food items by sub category
     * @param subCategory - The sub category to filter by
     * @returns An array of food items with the specified sub category
     */
    async getFoodItemsBySubCategory(subCategory: FoodSubCategory): Promise<FoodItemType[]> {
        const querySnapshot = await getDocs(query(this.collectionRef, where('category', '==', subCategory)));
        const foodItems: FoodItemType[] = [];
        querySnapshot.forEach((doc) => {
            foodItems.push(doc.data());
        });
        return foodItems;
    }

    /**
     * Update a food item
     * @param id - The ID of the food item to update
     * @param data - The updated food item data
     * @param oldItem - The old food item data
     */
    async updateFoodItem(id: string, data: FoodItemTypeWithFile | FoodItemType, oldItem: FoodItemType): Promise<void> {
        // If the food item image has been updated, delete the old image and upload the new one
        if (data.image instanceof File) {
            await this.storageService.deleteFile(oldItem.image.path);
            const uploadedImage = await this.storageService.uploadFile(data.image, this.storageRootPath);
            data = {
                ...data,
                image: uploadedImage,
            } as FoodItemType
        }

        // Update the food item in Firestore
        const docRef = doc(this.collectionRef, id);
        return updateDoc(docRef, data);
    }

    /**
     * Delete a food item
     * @param item - The food item to delete
     */
    async deleteFoodItem(item: FoodItemType): Promise<void> {
        // Delete the food item image from Firebase Storage
        await this.storageService.deleteFile(item.image.path);

        // Delete the food item from Firestore
        const docRef = doc(this.collectionRef, item.id!);
        await deleteDoc(docRef);
    }

    /**
     * Fetch all food items from Firestore and update the food items array and store
     */
    private fetchAllFoodItems(): void {
        const q = query(this.collectionRef);

        // Listen for changes to the food items collection in Firestore
        onSnapshot(
            q,
            { includeMetadataChanges: true },
            (querySnapshot) => {
                const foodItems: FoodItemType[] = [];
                querySnapshot.forEach((doc) => {
                    foodItems.push(doc.data());
                });

                // Update the food items array and store
                this._store.setState({ foodItems: foodItems });
            });
    }
}