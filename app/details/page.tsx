"use client";
import { useEffect, useState } from "react";
import {
    ImageCard,
    ItemCard,
    ListBuilding,
    SectionDetails,
    TextBox,
    TextInform,
    TextInformBox,
    TextInformItem,
    TitleCard,
} from "./page.styled";

interface Card {
    id: number;
    image: string;
    title: string;
    price: number;
    yield: number;
    sold: number;
    tiket: number;
    daysLeft: number;
    usersId: number;
}

export default function Details() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/deals/all")
            .then((response) => response.json())
            .then((data) => {
                setCards(data.data);
                console.log(data.data);
            });
    }, []);

    return (
        <main>
            <SectionDetails>
                <ListBuilding>
                    {cards.length > 0 &&
                        cards.map((card: Card) => (
                            <ItemCard key={card.id}>
                                <ImageCard src={card.image} alt={card.title} />
                                <TextBox>
                                    <TitleCard>{card.title}</TitleCard>
                                    <TextInformBox>
                                        <TextInform className="font-bold font-Lato leading-[22px] mb-[10px]">
                                            <TextInformItem>
                                                {card.price} Dhs
                                            </TextInformItem>
                                            <TextInformItem>
                                                Yield {card.yield}%
                                            </TextInformItem>
                                            <TextInformItem>
                                                Sold {card.sold}%
                                            </TextInformItem>
                                        </TextInform>
                                        <TextInform className="font-bold font-Lato leading-[22px]">
                                            <TextInformItem>
                                                Tiket - {card.tiket} Dhs
                                            </TextInformItem>
                                            <TextInformItem>
                                                Days left {card.daysLeft}{" "}
                                            </TextInformItem>
                                        </TextInform>
                                    </TextInformBox>
                                </TextBox>
                            </ItemCard>
                        ))}
                </ListBuilding>
            </SectionDetails>
        </main>
    );
}
