"use client"
import {columns} from "./components/columns"
import {DataTable} from "../../components/data-table"
import {Button} from "@/components/ui/button"
import {PlusCircle} from 'lucide-react';
import {NewItemDialog} from './components/edit-item-dialog'
import {FoodItemType} from "@/types/food-item"
import {FoodItemsService} from '@/services/food-items'
import {FoodDataTableToolbar} from "./components/table-toolbar";


export default function FoodItemsPage() {
    const items = FoodItemsService.instance.store(state => state.data) as FoodItemType[];
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Food Items</h2>
                <div className="flex items-center space-x-2">
                    <NewItemDialog>
                        <Button size="sm">
                            <PlusCircle className="mr-2 h-4 w-4"/>
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

