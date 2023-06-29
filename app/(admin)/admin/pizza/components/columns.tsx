"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "../../../components/data-table-column-header"
import { RowActions } from "./row-actions"

import { FoodItemType } from '@/types/food-item'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge";

export const columns: ColumnDef<FoodItemType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (<div className="flex gap-2 w-[120px]">
        <Avatar>
          <AvatarImage src={row.original.image.downloadURL} alt="Food Item Image" />
          <AvatarFallback>IT</AvatarFallback>
        </Avatar>
        <span>{row.getValue("name")}</span>
      </div>)
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => <div className="w-[150px]">{row.getValue("description")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("category")}</div>,
    filterFn: (row, id, filterValue) => {
      return filterValue.includes(row.original.category);
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "sizes",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sizes" />
    ),
    cell: ({ row }) => {
      const sizes = row.original.sizes

      return (
        <div className="flex space-x-2">
          {sizes.map((size) => (
              <Badge variant="outline">{size.shortName} $ {size.price}</Badge>
          ))}
          {/*<span className="max-w-[500px] truncate font-medium">*/}
          {/*  {row.getValue("title")}*/}
          {/*</span>*/}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions row={row} />,
  },
]
