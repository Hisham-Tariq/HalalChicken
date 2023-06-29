import { FirestoreCollections } from '@/constants/firestore-collections'
import { FirebaseStorageService } from '@/services/firesbase-storage'
import {
    FoodItemType,
    FoodItemTypeWithFile, FoodMainCategories,
    FoodMainCategory,
    FoodSubCategory,
} from '@/types/food-item'
import { FirestoreService } from '@/services/firestore-service'

export type FoodItemServiceState = {
    data: FoodItemType[];
    pizzas: FoodItemType[];
}

const INITIAL_STATE: FoodItemServiceState = {
    data: [],
    pizzas: [],
}

/**
 * Service for managing food items
 */
export class FoodItemsService extends FirestoreService<FoodItemServiceState, FoodItemType>{
    private static _instance: FoodItemsService;
    // Root path for Firebase Storage
    private storageRootPath = 'food-items';
    // Firebase Storage service for managing food item images
    private storageService = new FirebaseStorageService();

    // Private constructor to enforce singleton pattern
    private constructor() {
        super(FirestoreCollections.FoodItems, INITIAL_STATE);
        this.fetchAll(items => {
            return {
                pizzas: items.filter(item => item.category === "Pizza"),
            }
        });
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


    /**
     * Add a new food item
     * @param data - The food item data to add
     */
    async addFoodItem(data: FoodItemTypeWithFile): Promise<string> {
        // Upload the food item image to Firebase Storage
        const uploadedFile = await this.storageService.uploadFile(data.image, this.storageRootPath);
        // check if data contains sizes
        if (!data.sizes) {
            data.sizes = []
        }
        // Create the food item data object with the uploaded image
        const foodItemData = {
            ...data,
            image: uploadedFile
        } as FoodItemType

        // Add the food item to FirestoreService
        return this.add(foodItemData);
    }

    /**
     * Get all food items by main category
     * @param mainCategory - The main category to filter by
     * @returns An array of food items with the specified main category
     */
    getFoodItemsByMainCategory(mainCategory: FoodMainCategory): FoodItemType[] {
        return this._store.getState().data.filter((item) => item.category === mainCategory);
    }

    /**
     * Get all food items by sub category
     * @param subCategory - The sub category to filter by
     * @returns An array of food items with the specified sub category
     */
    getFoodItemsBySubCategory(subCategory: FoodSubCategory) {
        return this.state.data.filter((item) => item.category === subCategory);
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

        // Update the food item in FirestoreService
        return this.update(id, data as FoodItemType)
    }

    /**
     * Delete a food item
     * @param item - The food item to delete
     */
    async delete(item: FoodItemType): Promise<void> {
        // Delete the food item image from Firebase Storage
        await this.storageService.deleteFile(item.image.path);

        // Delete the food item from FirestoreService
        await super.delete(item);
    }
}