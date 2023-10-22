"use client";
import { usePathname } from "next/navigation";
import jwt_decode from "jwt-decode";
import BtnEmpty from "../Button/BtnEmpty/BtnEmpty";
import BtnFull from "../Button/BtnFull/BtnFull";
import { ButtonFull, HeaderStyled, NameText, Wrapper } from "../Header.styled";
import { useEffect, useState } from "react";

const Header = () => {
    const router = usePathname();
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        console.log(token);

        if (token) {
            const name = jwt_decode<{
                username: string;
                iat: number;
                exp: number;
            }>(token).username;
            console.log(name);
            setUserName(name);
        }
    }, [router]);

    return (
        <HeaderStyled>
            {userName ? (
                <>
                    <Wrapper>
                        <NameText>{userName}</NameText>
                        <ButtonFull type="button">Log out</ButtonFull>
                    </Wrapper>
                </>
            ) : (
                <>
                    {router !== "/login" && router !== "/signup" && (
                        <>
                            <BtnEmpty
                                radius={5}
                                text={"Log In"}
                                link={"/login"}
                                title={"Login page"}
                            />
                            <BtnFull link={"/signup"} />
                        </>
                    )}
                </>
            )}
        </HeaderStyled>
    );
};

export default Header;
