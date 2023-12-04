import { useState, useMemo, useEffect } from "react";
import { usuarios } from "./data";
import UsersTable from "./components/usersTable";
import axios from "axios";

const UserManager = () => {
  const [data, setData] = useState();

  const getUsers = async () => {
    const response = await axios.get(
      "https://aps-gastronomia-aps-gastronomia-back.azurewebsites.net/getusers"
    );
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <div></div>;
};

export default UserManager;
