export type PizzaSize = {
    name: string;
    shortName: string;
    inch: number;
    price: number;
}

export type PizzaSizesWithoutPrices = Omit<PizzaSize, "price">
export type PizzaSizesWithoutNameAndInch = Omit<PizzaSize, "name" | "inch">