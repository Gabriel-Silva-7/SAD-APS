import { useState, useMemo } from "react";
import { usuarios } from "./data";
import UsersTable from "./components/usersTable";

const UserManager = () => {
  return (
    <div>
      UserManager
      {/* <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cidade</th>
          </tr>
        </thead>
        {usuarios.usuarios.map((user) => (
          <tbody>
            <tr>
              <td>{user.nome}</td>
              <td>{user.cidade}</td>
            </tr>
          </tbody>
        ))}
      </table> */}
      {/* <UsersTable /> */}
      {usuarios.usuarios.map((user) => {
        return <div>{user.nome}</div>;
      })}
    </div>
  );
};

export default UserManager;
