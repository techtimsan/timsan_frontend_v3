"use client";

import { AttendeeProps, UserProps } from "@/types/app";
import type { ChangeEvent, Key } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Tooltip,
  Input,
  Pagination,
} from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { ConfirmDeleteUserModal } from ".";
import AddAtteendeeModal from "./AddAttendeeModal";

export type ConfAttendeesProps = {
  attendees: AttendeeProps[];
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
    key: "membershipType",
    label: "Membership Type",
  },
  {
    key: "paymentStatus",
    label: "Payment Status",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const ManageConfAttendees = ({ attendees }: ConfAttendeesProps) => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const pages = Math.ceil(attendees.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  // filter users by lastname, firstname or email
  const filteredItems = useMemo(() => {
    let filteredUsers = [...attendees];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (attendee) =>
          attendee.attendee.lastName
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ||
          attendee.attendee.firstName
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ||
          attendee.attendee.email
            .toLowerCase()
            .includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [attendees, filterValue]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return hasSearchFilter
      ? filteredItems.slice(start, end)
      : attendees.slice(start, end);
  }, [page, rowsPerPage, attendees, hasSearchFilter, filteredItems]);

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

  const topContent = useMemo(() => {
    return (
      <div className="flex gap-4 flex-col">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<IoSearchOutline />}
            // value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <AddAtteendeeModal />
        </div>

        {/* top - bottom */}
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {attendees.length} users
          </span>
          <label
            htmlFor="rowsPerPage"
            className="7654ertyui text-default-400 text-small whitespace-nowrap"
          >
            Rows per page:
            <Select
              id="rowsPerPage"
              labelPlacement="outside"
              size="sm"
              className=" text-green outline-none text-small"
              onChange={onRowsPerPageChange}
            >
              <SelectItem key={10} value={10}>10</SelectItem>
              <SelectItem key={20} value={20}>20</SelectItem>
              <SelectItem key={50} value={50}>50</SelectItem>
            </Select>
          </label>
        </div>
      </div>
    );
  }, []);

  const renderCell = useCallback(
    (attendee: AttendeeProps, columnkey: Key | null | undefined) => {
      switch (columnkey) {
        case "firstName":
          return <span>{attendee.attendee.firstName}</span>;
        case "lastName":
          return <span>{attendee.attendee.lastName}</span>;
        case "email":
          return <span>{attendee.attendee.email}</span>;
        case "membershipType":
          return <span>{attendee.membershipType}</span>;
        case "paymentStatus":
          return (
            <span>
              {attendee.paymentStatus === "PAYMENT_SUCCESSFUL"
                ? "Payment Successful"
                : "Unsuccessful Payment"}
            </span>
          );
        case "actions":
          return (
            <>
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
            </>
          );
      }
    },
    []
  );

  return (
    <Table
      aria-label="Users"
      selectionMode="single"
      color="success"
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
          <TableRow key={item.attendee.id}>
            {(columnkey) => (
              <TableCell>{renderCell(item, columnkey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ManageConfAttendees;
