import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

type Person = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
};

const columnHelper = createColumnHelper<Person>();

export const tableColumns = [
  columnHelper.accessor("id", {
    header: "",
    enableSorting: false,
    cell: (info) => (
      <input
        type="checkbox"
        checked={info.row.getIsSelected()}
        onChange={info.row.getToggleSelectedHandler()}
      />
    ),
  }),

  columnHelper.accessor("firstName", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("middleName", {
    header: "Middle Name",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("lastName", {
    header: "Last Name",
    cell: (info) => info.getValue(),
  }),
];

export const tableData: Person[] = [
  {
    id: "1",
    firstName: "John",
    middleName: "Mark",
    lastName: "Smith",
  },
  {
    id: "2",
    firstName: "Miguel",
    middleName: "Lacson",
    lastName: "Bermudez",
  },
  {
    id: "3",
    firstName: "Jane",
    middleName: "Camillia",
    lastName: "Montes",
  },
];
