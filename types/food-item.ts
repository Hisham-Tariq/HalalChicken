import { FirestoreUploadedFile } from './upload-file'
import { PizzaSizesWithoutNameAndInch } from "@/types/pizza-sizes";


export const FoodMainCategories = ['Burger', 'Pizza', 'Shawarminos', 'Chicken'] as const;
export type FoodMainCategory = typeof FoodMainCategories[number];

export const FoodSubCategories = ['Burger', 'Pizza', 'Shawarma', 'Nuggets', 'Wings', 'Wraps', 'Platters'] as const;
export type FoodSubCategory = typeof FoodSubCategories[number];



export const FoodSubCategoriesMapping: Record<FoodMainCategory, FoodSubCategory[]> = {
    'Pizza': ['Pizza'],
    'Burger': ['Burger'],
    'Shawarminos': ['Shawarma', 'Wraps', 'Platters'],
    'Chicken': ['Nuggets', 'Wings', 'Platters']
};

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
    image: FirestoreUploadedFile,
    sizes: PizzaSizesWithoutNameAndInch[]
}

// Define the shape of a food item with a file
export type FoodItemTypeWithFile = Omit<FoodItemType, 'image'> & { image: File }

export const getMainCategory = (subCategory: FoodSubCategory): FoodMainCategory | undefined => {
    for (const [mainCategory, subCategories] of Object.entries(FoodSubCategoriesMapping)) {
        if (subCategories.includes(subCategory)) {
            return mainCategory as FoodMainCategory;
        }
    }
}