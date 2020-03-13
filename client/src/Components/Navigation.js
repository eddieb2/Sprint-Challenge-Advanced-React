import React from "react";
import styled from "styled-components";
import { useDarkMode } from "../Hooks/useDarkMode";

const NavWrapper = styled.nav`
  display: flex;
  border-bottom: 2px solid lightgray;
  margin-bottom: 2%;
  padding: 1% 0%;
`;

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <NavWrapper>
      <h1>Soccer Player Searchers</h1>
      <button onClick={toggleMode}>Dark Mode</button>
    </NavWrapper>
  );
};

export default Navigation;
