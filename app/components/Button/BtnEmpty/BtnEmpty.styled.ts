"use client";
import { styled } from "styled-components";

export const ButtonEmpty = styled.button`
    color: #b29f7e;
    background-color: transparent;
    border: 1px solid #b29f7e;
    border-radius: 5px;
    padding: 10px 20px;
    text-align: center;
    min-width: 120px;

    &:hover {
        background-color: #b29f7e;
        color: #fff;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media screen and (min-width: 768px) {
        min-width: 160px;
        font-size: 16px;
    }
`;
