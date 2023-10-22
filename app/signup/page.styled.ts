import { styled } from "styled-components";

export const SectionSignup = styled.section`
    background-color: #f0f6ff;
    display: flex;
    height: calc(100vh - 80px);
`;

export const ImageSignup = styled.img`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        width: 400px;
        height: 100%;
    }

    @media screen and (min-width: 1024px) {
        width: 560px;
    }

    @media screen and (min-width: 1440px) {
        width: 890px;
    }
`;

export const FormSignupBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    padding: 0 24px;

    @media screen and (min-width: 768px) {
        margin-left: 50px;
        width: 250px;
        padding: 0;
    }

    @media screen and (min-width: 1024px) {
        margin-left: 70px;
        width: 300px;
    }

    @media screen and (min-width: 1440px) {
        margin-left: 100px;
        width: 350px;
    }
`;

export const TitleSignup = styled.h1`
    font-size: 28px;
    color: #172234;
    margin-bottom: 20px;
    text-align: left;
`;

export const FormSignup = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
`;

export const LabelSignup = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #000;
`;

export const InputSignup = styled.input`
    border: 1px solid transparent;
    background-color: #e0e0e0;
    border-radius: 5px;
    padding: 10px;
    margin-top: 4px;
    width: 100%;
    color: #172234;
`;

export const LinkSignup = styled.a`
    color: #b29f7e;
    text-align: end;
    margin-bottom: 30px;

    &:hover {
        color: #172234;
        text-decoration: underline;
        text-underline-offset: 4px;
    }
`;

export const ButtonSignup = styled.button`
    width: 100%;
    background-color: #b29f7e;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #b29f7e;
    color: #fff;

    &:hover {
        background-color: transparent;
        color: #b29f7e;
    }
`;

export const TextSignup = styled.p`
    color: #172234;
    font-size: 14px;
    margin: 0 auto;
`;
