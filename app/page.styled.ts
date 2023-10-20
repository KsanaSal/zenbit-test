import { styled } from "styled-components";

export const SectionHome = styled.section`
    background-image: linear-gradient(
            rgba(23, 34, 52, 0.6),
            rgba(23, 34, 52, 0.6)
        ),
        url("/assets/images/back-home.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 48px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        font-size: 52px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 64px;
    }
`;

export const Text = styled.p`
    font-size: 18px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    width: 100%;

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 24px;
        width: 822px;
    }
`;
