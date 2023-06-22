"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FoodItemType, FoodMainCategories, FoodSubCategories, FoodSubCategoriesMapping, FoodSubCategory } from '@/types/food-item'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Check, ChevronsUpDown, PlusCircle, Save } from "lucide-react"
import { ControllerRenderProps, useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn, inputStringToNumber } from "@/lib/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { useState } from "react"
import { FoodItemsService } from '@/services/food-items'
import { FoodItemTypeWithFile, getMainCategory } from '@/types/food-item'
import { toast } from "@/components/ui/use-toast"

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const SUB_CATEGORIES = FoodSubCategories.filter((cat) => cat != "Pizza")
const DEFAULT_VALUES = {
    name: "",
    description: "",
    price: 0,
    availableInMeal: false,
    mealPrice: 0,
    image: "",
    category: SUB_CATEGORIES[0],
    mainCategory: getMainCategory(SUB_CATEGORIES[0])
};

const baseSchema = z.object({
    name: z.string().nonempty({
        message: "Name is required.",
    }),
    description: z.string().nonempty({
        message: "Description is required.",
    }),
    price: z.number().min(1, {
        message: "Must be greater than 1.",
    }),
    image: z.string({
        required_error: "Image is required.",
    }),
    category: z.enum(FoodSubCategories, {
        required_error: "Please select a category.",
    }),
    mainCategory: z.enum(FoodMainCategories, {
        required_error: "Please select a category.",
    })
})

const formSchema = z.discriminatedUnion("availableInMeal", [
    z.object({
        availableInMeal: z.literal(true as boolean),
        mealPrice: z.number().min(1, {
            message: "Meal Price must be at least 1.",
        }),
    }).merge(baseSchema),
    z.object({
        availableInMeal: z.literal(false as boolean),
        mealPrice: z.number().min(0, {
            message: "Meal Price must be at least 0.",
        }),
    }).merge(baseSchema),
]);


type NewItemDialogProps = {
    children: React.ReactNode,
    item?: FoodItemType,
}

export function NewItemDialog(props: NewItemDialogProps) {
    const { children, item } = props;
    const [itemImage, setItemImage] = useState<File | null>(null)

    const onImageChanged = (e: React.ChangeEvent<HTMLInputElement>, onFieldChange: (...event: any[]) => void) => {
        const file = e.target.files?.[0]
        console.log(file)
        let message = undefined;
        if (!file) message = "Image is required";
        else if (file.size > MAX_FILE_SIZE) message = `Max file size is 5MB.`;
        else if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) message = ".jpg, .jpeg, .png and .webp files are accepted.";
        if (message) {
            form.setError("image", {
                type: "value",
                message: message,
            });
        } else {
            setItemImage(file!)
            form.clearErrors("image");
        }
        onFieldChange(e);
    }

    const getDefaultValues = () => {
        if (item) {
            return {
                ...item,
                image: item.image.downloadURL,
            }
        }
        return DEFAULT_VALUES
    }

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: getDefaultValues(),
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (itemImage == null && item == null) {
            toast({
                title: "Item Image",
                description: "Image is required",
            });
            return
        }
        if (item == null) {
            const foodItem = { ...values, image: itemImage } as FoodItemTypeWithFile
            FoodItemsService.instance.addFoodItem(foodItem).then(() => {
                // onItemAdded?.()
                toast({
                    title: "Item Added",
                    description: "Item has been added successfully",
                })
                form.reset(DEFAULT_VALUES)
            });
        } else {
            let foodItem: FoodItemTypeWithFile | FoodItemType;
            if (itemImage != null) {
                foodItem = { ...item, ...values, image: itemImage } as FoodItemTypeWithFile
            } else {
                foodItem = { ...item, ...values, image: item.image } as FoodItemType
            }
            console.log(foodItem)
            FoodItemsService.instance.updateFoodItem(item.id!, foodItem, item).then(() => {
                // onItemAdded?.()
                toast({
                    title: "Item Updated",
                    description: "Item has been updated successfully",
                });
                form.reset(DEFAULT_VALUES)
            });
        }

    }

    const onDialogOpenChange = (open: boolean) => {
        if (open) {
            const { image, ...data } = item ?? DEFAULT_VALUES
            form.reset({
                ...data,
                image: "",
            })
        }
    }




    return (
        <Dialog onOpenChange={onDialogOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] sm:max-h-[550px] flex flex-col p-0">
                <DialogHeader className="pt-6 px-6">
                    <DialogTitle>New Item</DialogTitle>
                    <DialogDescription>
                        Create a new item by filling out the form below.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[450px] px-6 pb-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2">
                            <div className="col-span-full flex flex-row gap-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Chicken Biryani" {...field} />
                                            </FormControl>
                                            {/* <FormDescription>
                                                Enter the name of the food item.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="10.99" {...field} onChange={(e) => {
                                                    const value = inputStringToNumber(e.target.value);
                                                    form.setValue("price", value);
                                                }} />
                                            </FormControl>
                                            {/* <FormDescription>
                                                Enter the price of the food item.
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }: { field: ControllerRenderProps<z.infer<typeof formSchema>, "category"> }) => (
                                        <FormItem className="flex flex-col flex-1 space-y-0">
                                            <FormLabel className="my-2">Language</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className={cn(
                                                                "w-full justify-between",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value || "Select Category"}
                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-full p-0">
                                                    <Command>
                                                        <CommandInput placeholder="Search Category" />
                                                        <CommandEmpty>No category found.</CommandEmpty>
                                                        <CommandGroup>
                                                            {FoodSubCategories.map((category) => (
                                                                <CommandItem
                                                                    value={category}
                                                                    key={category}

                                                                    onSelect={(value) => {
                                                                        const selectedCategory = FoodSubCategories.find((cat) => cat.toLowerCase() === value) as FoodSubCategory;
                                                                        form.setValue("category", selectedCategory as FoodSubCategory)
                                                                        form.setValue("mainCategory", getMainCategory(selectedCategory)!)
                                                                    }}
                                                                >
                                                                    <Check
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            category === field.value
                                                                                ? "opacity-100"
                                                                                : "opacity-0"
                                                                        )}
                                                                    />
                                                                    {category}
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                            {/* <FormDescription>
                                                
                                            </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="col-span-2">
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Aromatic rice dish with chicken" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter a description for the food item.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="mealPrice"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Meal Price</FormLabel>
                                        <div className="flex flex-row justify-start">
                                            <FormField
                                                control={form.control}
                                                name="availableInMeal"
                                                render={({ field }) => (
                                                    <FormItem className="flex rounded-md rounded-e-none  border py-2  px-3 justify-center items-center">
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                            />
                                                        </FormControl>

                                                    </FormItem>
                                                )}
                                            />
                                            <FormControl className="flex-1">
                                                <Input
                                                    disabled={!form.getValues()['availableInMeal']}
                                                    className="rounded-s-none"
                                                    type="number"
                                                    placeholder="15.99"
                                                    {...field}
                                                    onChange={(e) => {
                                                        const value = inputStringToNumber(e.target.value);
                                                        form.setValue("mealPrice", value);
                                                    }} />
                                            </FormControl>
                                        </div>

                                        <FormDescription>
                                            Check and enter the meal price of the food item.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <Input type="file" {...field} onChange={(e) => onImageChanged(e, field.onChange)} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the URL of the image for the food item.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter className="col-span-2 flex justify-end">
                                <Button size={'lg'} type="submit">
                                    <Save className="mr-2 h-4 w-4" />
                                    {item ? 'Update' : 'Save Changes'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </ScrollArea>
                {/* <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}
