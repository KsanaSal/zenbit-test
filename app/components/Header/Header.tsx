"use client";
import BtnEmpty from "../Button/BtnEmpty/BtnEmpty";
import BtnFull from "../Button/BtnFull/BtnFull";
import { HeaderStyled } from "../Header.styled";

const Header = () => {
    return (
        <HeaderStyled>
            <BtnEmpty radius={5} text={"Log In"} link={"/login"} />
            <BtnFull link={"/signup"} />
        </HeaderStyled>
    );
};

export default Header;
