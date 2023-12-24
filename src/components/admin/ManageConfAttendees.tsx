"use client";

import { AttendeeProps, UserProps } from "@/types/app";
import type { Key } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { TfiTrash } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";

export type ConfAttendeesProps = {
    attendees: AttendeeProps[]
}

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

const ManageConfAttendees = ({attendees}: ConfAttendeesProps) => {
    const [filterValue, setFilterValue] = useState<string>("")
    const [page, setPage] = useState<number>(1)

    const rowsPerPage = 18;
  const pages = Math.ceil(attendees.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return attendees.slice(start, end);
  }, [page, attendees]);

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
                  value={filterValue}
                  onClear={() => onClear()}
                  onValueChange={onSearchChange}
                />
              </div>
      
              {/* top - bottom */}
              <div className="flex justify-between items-center">
                <span className="text-default-400 text-small">
                  Total {attendees.length} users
                </span>
              </div>
            </div>
          );
    }, [])

    const renderCell = useCallback(
        (attendee: AttendeeProps, columnkey: Key | null | undefined) => {
          switch (columnkey) {
            case "firstName":
              return <span>{attendee.attendee.firstName}</span>;
            case "lastName":
              return <span>{attendee.attendee.lastName}</span>;
            case "membershipType":
              return <span>{attendee.membershipType}</span>;
            case "paymentStatus":
              return <span>{attendee.paymentStatus === "PAYMENT_SUCCESSFUL" ? "Payment Successful" : "Unsuccessful Payment"}</span>;
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
                  <Tooltip color="danger" content="Delete user">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <TfiTrash />
                    </span>
                  </Tooltip>
                </div>
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
    )
}

export default ManageConfAttendees