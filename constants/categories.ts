export const FoodMainCategories = ['Pizza', 'Burger', 'Shawarminos', 'Chicken'] as const;
export type FoodMainCategory = typeof FoodMainCategories[number];

export const FoodSubCategories = ['Pizza', 'Burger', 'Shawarma', 'Nuggets', 'Wings', 'Wraps', 'Platters'] as const;
export type FoodSubCategory = typeof FoodSubCategories[number];

export const FoodSubCategoriesMapping: Record<FoodMainCategory, FoodSubCategory[]> = {
    'Pizza': ['Pizza'],
    'Burger': ['Burger'],
    'Shawarminos': ['Shawarma', 'Wraps', 'Platters'],
    'Chicken': ['Nuggets', 'Wings', 'Platters']
};
