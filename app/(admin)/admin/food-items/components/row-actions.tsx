"use client"

import { Row } from "@tanstack/react-table"
import { Pencil, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FoodItemsService } from '@/services/food-items'
import { FoodItemType } from "@/types/food-item"
import { useToast } from '@/components/ui/use-toast'
import { NewItemDialog } from './edit-item-dialog'
import { useState } from "react";


type Props = {
  row: Row<FoodItemType>
}

export function RowActions({
  row,
}: Props) {

  return (
    <div className="flex gap-2">
      <NewItemDialog item={row.original}>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 bg-muted"
        >
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
      </NewItemDialog>
      <DeleteFoodItemButton item={row.original} />
    </div>
  )
}



const DeleteFoodItemButton = ({ item }: { item: FoodItemType }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      variant="ghost"
      onClick={async () => {
        setIsLoading(true);
        try {
          await FoodItemsService.instance.delete(item);
          toast({
            title: "Food Item Deleted",
            description: "Food Item has been deleted.",
          });
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to delete food item.",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      }}
      className="flex h-8 w-8 p-0 bg-muted"
      disabled={isLoading}
    >
      {isLoading ? (
        <LoadingCircle size={4} />
      ) : (
        <>
          <Trash className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </>
      )}
    </Button>
  );
};




