"use client";
import { styled } from "styled-components";

interface BtnEmptyProps {
    radius: number;
}

export const ButtonEmpty = styled.a<BtnEmptyProps>`
    color: ${(props) => (props.radius === 8 ? "#fff" : "#b29f7e")};
    background-color: transparent;
    border: 1px solid ${(props) => (props.radius === 8 ? "#fff" : "#b29f7e")};
    border-radius: ${(props) => props.radius}px;
    padding: 10px 20px;
    text-align: center;
    min-width: 120px;
    font-size: ${(props) => (props.radius === 8 ? "16px" : "14px")};

    &:hover {
        background-color: #b29f7e;
        color: #fff;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media screen and (min-width: 768px) {
        min-width: 160px;
        font-size: ${(props) => (props.radius === 8 ? "20px" : "16px")};
    }
`;
