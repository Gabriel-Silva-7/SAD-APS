import { useState, useMemo, useEffect } from "react";
import { usuarios } from "./data";
import UsersTable from "./components/usersTable";
import axios from "axios";
import Header from "./components/Header";
import { Divider } from "@mui/material";
import * as S from "./styles";

const UserManager = () => {
  const [data, setData] = useState();

  const getUsers = async () => {
    const response = await axios.get(
      "https://gastronom.azurewebsites.net/getusers"
    );
    setData(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <S.Container>
      <Header />
      <Divider />
      <S.ContainerCards>
        {data?.map((e) => {
          return <S.Card>{e.Nome_Usuario}</S.Card>;
        })}
      </S.ContainerCards>
    </S.Container>
  );
};

export default UserManager;
