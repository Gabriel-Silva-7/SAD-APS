import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Header from "./components/Header/";
import * as S from "./styles";
import axios from "axios";

const Finc = () => {
  const [selectedOption, setSelectedOption] = useState(-15);

  return (
    <div style={{ padding: "20px", width: "98%" }}>
      <Header
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div style={{ width: "97.5%", marginLeft: "1.25%" }}>
        <Divider />
      </div>
      <S.GridContainer></S.GridContainer>
    </div>
  );
};

export default Finc;
