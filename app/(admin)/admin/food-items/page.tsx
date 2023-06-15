import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react';
import { NewItemDialog } from './components/new-item-dialog'

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(admin)/admin/food-items/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function FoodItemsPage() {
  const tasks = await getTasks()

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Food Items</h2>
        <div className="flex items-center space-x-2">
          {/* <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Item
          </Button> */}
          <NewItemDialog />
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  )
}
