"use client"
import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "../../components/data-table"
import { taskSchema } from "./data/schema"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react';
import { NewItemDialog } from './components/edit-item-dialog'
import { FoodItemType } from "@/types/food-item"
import { useQuery } from "@tanstack/react-query"
import { FoodItemsService, FoodItemServiceState } from '@/services/food-items'
import { useStore } from "zustand"
import { FoodDataTableToolbar } from "./components/food-data-table-toolbar"


export const metadata: Metadata = {
  title: "FoodItems",
  description: "FoodItems Management",
}

export default function FoodItemsPage() {
  // const useItemsStore = (selector: (state: FoodItemServiceState) => unknown) => useStore(FoodItemsService.instance., selector);

  const items = FoodItemsService.instance.store(state => state.foodItems) as FoodItemType[];
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Food Items</h2>
        <div className="flex items-center space-x-2">
          <NewItemDialog>
            <Button size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Item
            </Button>
          </NewItemDialog>
        </div>
      </div>
      <DataTable
        data={items}
        columns={columns}
        toolbar={(table) => <FoodDataTableToolbar table={table}/>}
      />
    </div>
  )
}
