import { useMemo } from "react";
import { useReactTable } from "@tanstack/react-table";
import usersData from "../../usersData.json";
import { COLUMNS } from "../columns";

const UsersTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => usersData, []);
  console.log(data);
  const tableInstanse = ({
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useReactTable({
    columns,
    data,
  }));

  return (
    <table {...getTableProps()}>
      <thead
        {...headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      ></thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersTable;
