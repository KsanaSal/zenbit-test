import { styled } from "styled-components";

export const SectionDetails = styled.section`
    background-color: #f2f2f2;
    padding: 100px 24px;
    /* display: grid; */

    @media screen and (min-width: 768px) {
        padding: 120px 40px;
    }

    @media screen and (min-width: 1024px) {
        padding: 120px 80px;
    }
`;

export const ListBuilding = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-items: center;
    align-items: center;
`;

export const ItemCard = styled.li`
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    /* padding-left: 14px; */
    /* padding-bottom: 20px; */
`;

export const ImageCard = styled.img`
    width: 100%;
`;

export const TextBox = styled.div`
    position: absolute;
    bottom: 20px;
    left: 14px;
    color: #fff;
`;

export const TitleCard = styled.h2`
    font-size: 20px;
    margin-bottom: 8px;
`;

export const TextInform = styled.ul`
    display: flex;
    align-items: center;
    gap: 60px;
`;

export const TextInformItem = styled.li`
    width: 170px;
`;
