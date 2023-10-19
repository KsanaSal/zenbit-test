import { styled } from "styled-components";

export const SectionHome = styled.section`
    background-image: linear-gradient(
            rgba(23, 34, 52, 0.6),
            rgba(23, 34, 52, 0.6)
        ),
        url("/assets/images/back-home.jpg");
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 64px;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
`;

export const Text = styled.p`
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    width: 822px;
`;
