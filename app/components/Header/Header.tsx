"use client";
import BtnEmpty from "../Button/BtnEmpty/BtnEmpty";
import BtnFull from "../Button/BtnFull/BtnFull";
import { HeaderStyled } from "../Header.styled";

const Header = () => {
    return (
        <HeaderStyled>
            <BtnEmpty />
            <BtnFull />
        </HeaderStyled>
    );
};

export default Header;
