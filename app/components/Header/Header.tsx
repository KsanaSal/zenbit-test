"use client";
import BtnEmpty from "../Button/BtnEmpty/BtnEmpty";
import { HeaderStyled } from "../Header.styled";

const Header = () => {
    return (
        <HeaderStyled>
            <h1>Header</h1>
            <BtnEmpty />
        </HeaderStyled>
    );
};

export default Header;
