import { FirestoreCollections } from '@/constants/firestore-collections'
import {
    doc,
    setDoc,
    FirestoreDataConverter,
    DocumentData,
    getDocs,
    query,
    where,
    deleteDoc,
    onSnapshot,
    Unsubscribe,
    SnapshotOptions,
    QueryDocumentSnapshot,
    updateDoc,
    arrayRemove,
    arrayUnion
} from 'firebase/firestore'
import { FirebaseStorageService } from '@/services/firesbase-storage'
import { FoodMainCategory, FoodSubCategory } from '@/constants/categories'

// Define the shape of a food item
export type FoodItemType = {
    id?: string
    name: string
    description: string
    price: number
    category: FoodSubCategory,
    mainCategory: FoodMainCategory,
    availableInMeal: boolean,
    mealPrice: number,
    image: string
}

// Define the shape of a food item with a file
export type FoodItemTypeWithFile = Omit<FoodItemType, 'image'> & { image: File }

// Service for managing food items
export class FoodItemsService {
    private static _instance: FoodItemsService;
    private foodItems: FoodItemType[] = [];
    private storageRootPath = 'food-items';
    private collectionRef = FirestoreCollections.FoodItems.withConverter(new FoodItemInterfaceConverter());
    private storageService = new FirebaseStorageService();
    private foodItemsUnsubscribe: Unsubscribe | null = null;

    // Private constructor to enforce singleton pattern
    private constructor() {
        this.foodItemsUnsubscribe = this.fetchAllFoodItems();
    }

    // Get the list of food items
    public get items(): FoodItemType[] {
        return this.foodItems;
    }

    // Get the singleton instance of the service
    public static get instance(): FoodItemsService {
        if (!FoodItemsService._instance) {
            console.log("Creating new FoodItemsService Instance")
            FoodItemsService._instance = new FoodItemsService();
        }
        return FoodItemsService._instance;
    }

    // Add a new food item
    async addFoodItem(data: FoodItemTypeWithFile): Promise<void> {
        const imageUrl = await this.storageService.uploadFile(data.image, this.storageRootPath);
        const foodItemData = {
            ...data,
            image: imageUrl
        } as FoodItemType
        const docRef = doc(this.collectionRef)
        return setDoc(docRef, foodItemData);
    }

    // Fetch all food items and subscribe to changes
    private fetchAllFoodItems(): Unsubscribe {
        const q = query(this.collectionRef);
        return onSnapshot(
            q,
            { includeMetadataChanges: true },
            (querySnapshot) => {
                const foodItems: FoodItemType[] = [];
                querySnapshot.forEach((doc) => {
                    foodItems.push(doc.data());
                });
                this.foodItems = foodItems;
            });
    }

    // Get all food items by main category
    async getFoodItemsByMainCategory(mainCategory: FoodMainCategory): Promise<FoodItemType[]> {
        const querySnapshot = await getDocs(query(this.collectionRef, where('mainCategory', '==', mainCategory)));
        const foodItems: FoodItemType[] = [];
        querySnapshot.forEach((doc) => {
            foodItems.push(doc.data());
        });

        return foodItems;
    }

    // Get all food items by sub category
    async getFoodItemsBySubCategory(subCategory: FoodSubCategory): Promise<FoodItemType[]> {
        const querySnapshot = await getDocs(query(this.collectionRef, where('category', '==', subCategory)));
        const foodItems: FoodItemType[] = [];
        querySnapshot.forEach((doc) => {
            foodItems.push(doc.data());
        });
        return foodItems;
    }

    async updateFoodItem(id: string, data: FoodItemTypeWithFile | FoodItemType): Promise<void> {
        if (data.image instanceof File) {
            const imageUrl = await this.storageService.uploadFile(data.image, this.storageRootPath);
            data = {
                ...data,
                image: imageUrl
            } as FoodItemType
        }
        const docRef = doc(this.collectionRef, id);
        return updateDoc(docRef, data);
    }

    async deleteFoodItem(id: string): Promise<void> {
        const docRef = doc(this.collectionRef, id);
        await deleteDoc(docRef);
    }
}

// Firestore data converter for food items
class FoodItemInterfaceConverter implements FirestoreDataConverter<FoodItemType> {
    toFirestore(data: FoodItemType): DocumentData {
        return data
    }

    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options?: SnapshotOptions): FoodItemType {
        // Convert the Document data to a FoodItemType
        const data = snapshot.data(options)!;
        console.log(data)
        return {
            id: snapshot.id,
            ...data
        } as FoodItemType;
    }
}