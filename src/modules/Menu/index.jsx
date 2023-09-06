import React from "react";
import styled from "styled-components";
import Icon1 from "../../assets/1blue.png";
import Icon2 from "../../assets/2.png";
import Icon3 from "../../assets/3.png";
import Icon4 from "../../assets/4.png";
import Icon5 from "../../assets/5.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 100vh;
  background-color: #fff;
  padding: 0 1.5rem;
  box-shadow: ${(props) =>
    props.isOpen ? "5px 0 15px rgba(0, 0, 0, 0.1)" : "none"};
  position: relative;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  background-color: #fff;
  margin: 0;
  padding: 1rem 0;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 2rem;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0.5rem 0;
  border-radius: 0.3125rem;
  border: 0.5px solid #197bbd;
  padding: 0 0.5rem;

  &:hover {
    background: linear-gradient(180deg, #004ba8 0%, #5993ba 100%);
  }
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

const IconImage = styled.img`
  width: 1rem;
  height: 1rem;
`;

const MenuButton = styled.button`
  position: absolute;
  top: 1rem;
  left: ${(props) => (props.isOpen ? "16rem" : "0")};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s, left 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SidebarMenu = () => {
  const menuItems = [
    { icon: <IconImage src={Icon1} />, text: "Dashboard" },
    { icon: <IconImage src={Icon2} />, text: "Vendas" },
    { icon: <IconImage src={Icon3} />, text: "Desempenho Pessoal" },
    { icon: <IconImage src={Icon4} />, text: "Financeiro" },
    { icon: <IconImage src={Icon5} />, text: "Inventario e Estoque" },
  ];

  const [isOpen, setIsOpen] = React.useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen}>
        <Title>Menu</Title>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <Icon>{item.icon}</Icon>
            {item.text}
          </MenuItem>
        ))}
      </Sidebar>
      <MenuButton isOpen={isOpen} onClick={toggleMenu}>
        <GiHamburgerMenu />
      </MenuButton>
    </>
  );
};

export default SidebarMenu;
