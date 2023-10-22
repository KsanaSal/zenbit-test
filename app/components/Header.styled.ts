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

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const NameText = styled.p`
    color: #fff;
    font-size: 24px;
`;

export const ButtonFull = styled.button`
    color: #fff;
    background-color: #b29f7e;
    border: 1px solid #b29f7e;
    border-radius: 5px;
    padding: 10px 20px;
    text-align: center;
    min-width: 120px;

    &:hover {
        background-color: transparent;
        color: #b29f7e;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media screen and (min-width: 768px) {
        min-width: 160px;
        font-size: 18px;
    }
`;
