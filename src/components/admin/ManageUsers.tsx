"use client";

import { UserProps } from "@/types/app";
import type { ChangeEvent, ChangeEventHandler, Key } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { ConfirmDeleteUserModal } from ".";

export type ManageUsersProps = {
  users: UserProps[];
};

const columns = [
  {
    key: "lastName",
    label: "Last Name",
  },
  {
    key: "firstName",
    label: "First Name",
  },
  {
    key: "email",
    label: "Email Address",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const ManageUsers = ({ users }: ManageUsersProps) => {
  const [page, setPage] = useState<number>(1);
  const [filterValue, setFilterValue] = useState<string>("");
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  // filter users by lastname, firstname or email
  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.lastName.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.email.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [users, filterValue]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return hasSearchFilter
      ? filteredItems.slice(start, end)
      : users.slice(start, end);
  }, [page, rowsPerPage, users, hasSearchFilter, filteredItems]);

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedPage = Number(e.target.value);
      setRowsPerPage(selectedPage);
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  // top content
  const topContent = useMemo(() => {
    return (
      <div className="flex gap-4 flex-col">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by lastname, firstname or email..."
            startContent={<IoSearchOutline />}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>

        {/* top - bottom */}
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {users.length} users
          </span>
          <label
            htmlFor="rowsPerPage"
            className="flex items-center text-default-400 text-small"
          >
            Rows per page:
            <select
              id="rowsPerPage"
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, []);

  const renderCell = useCallback(
    (user: UserProps, columnkey: Key | null | undefined) => {
      switch (columnkey) {
        case "firstName":
          return <span>{user.firstName}</span>;
        case "lastName":
          return <span>{user.lastName}</span>;
        case "email":
          return <span>{user.email}</span>;
        case "status":
          return (
            <span>{user.emailVerified ? "Verified" : "Not Verified"}</span>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  {/* <EyeIcon /> */}
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  {/* <EditIcon /> */}
                </span>
              </Tooltip>
              <ConfirmDeleteUserModal />
            </div>
          );
      }
    },
    []
  );

  return (
    <Table
      aria-label="Manage Users - Admin Dashboard"
      isHeaderSticky
      isStriped
      selectionMode="single"
      topContent={topContent}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="success"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnkey) => (
              <TableCell>{renderCell(item, columnkey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ManageUsers;
