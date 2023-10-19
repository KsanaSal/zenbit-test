import { styled } from "styled-components";

export const HeaderStyled = styled.div`
    background-color: #172234;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        justify-content: flex-end;
        padding: 20px 40px;
        gap: 10px;
    }

    @media screen and (min-width: 1024px) {
        padding: 20px 80px;
    }
`;
