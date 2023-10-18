import { styled } from "styled-components";

export const Button = styled.button`
    color: #fff;
    background-color: #b29f7e;
    border: 1px solid #b29f7e;
    border-radius: 5px;
    padding: 10px 20px;
    text-align: center;
    min-width: 160px;

    &:hover {
        background-color: transparent;
        color: #b29f7e;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
