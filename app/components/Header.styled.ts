import { styled } from "styled-components";

export const HeaderStyled = styled.header`
    background-color: #172234;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 1;

    @media screen and (min-width: 768px) {
        justify-content: flex-end;
        padding: 20px 40px;
        gap: 10px;
    }

    @media screen and (min-width: 1024px) {
        padding: 20px 80px;
    }
`;
