"use client";
import { usePathname, useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import BtnEmpty from "../Button/BtnEmpty/BtnEmpty";
import BtnFull from "../Button/BtnFull/BtnFull";
import { ButtonFull, HeaderStyled, NameText, Wrapper } from "../Header.styled";
import { useEffect, useState } from "react";

const Header = () => {
    const pathName = usePathname();
    const [userName, setUserName] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            const name = jwt_decode<{
                username: string;
                iat: number;
                exp: number;
            }>(token).username;
            setUserName(name);
        }
    }, [pathName]);

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        router.push("/login");
        setUserName("");
    };

    return (
        <HeaderStyled>
            {userName ? (
                <>
                    <Wrapper>
                        <NameText>{userName}</NameText>
                        <ButtonFull type="button" onClick={handleLogout}>
                            Log out
                        </ButtonFull>
                    </Wrapper>
                </>
            ) : (
                <>
                    {pathName !== "/login" && pathName !== "/signup" && (
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
