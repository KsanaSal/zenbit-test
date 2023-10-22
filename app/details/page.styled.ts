import { styled } from "styled-components";

export const SectionDetails = styled.section`
    background-color: #f2f2f2;
    padding: 100px 20px;

    @media screen and (min-width: 768px) {
        padding: 120px 40px;
    }

    @media screen and (min-width: 1024px) {
        padding: 120px 80px;
    }
`;

export const ListBuilding = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-items: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        justify-items: center;
        align-items: center;
    }
`;

export const ItemCard = styled.li`
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
`;

export const ImageCard = styled.img`
    width: 100%;
`;

export const TextBox = styled.div`
    position: absolute;
    bottom: 14px;
    left: 10px;
    color: #fff;

    @media screen and (min-width: 768px) {
        bottom: 16px;
        left: 12px;
    }

    @media screen and (min-width: 1024px) {
        bottom: 20px;
        left: 14px;
    }
`;

export const TitleCard = styled.h2`
    font-size: 16px;
    margin-bottom: 4px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
        margin-bottom: 8px;
    }

    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
`;

export const TextInformBox = styled.div`
    display: flex;
    gap: 20px;

    @media screen and (min-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`;

export const TextInform = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 14px;

    @media screen and (min-width: 768px) {
        gap: 8px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 1440px) {
        font-size: 18px;
        display: flex;
        gap: 60px;
        flex-direction: row;
    }
`;

export const TextInformItem = styled.li`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 140px;
    }

    @media screen and (min-width: 1024px) {
        width: 170px;
    }
`;
