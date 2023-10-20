"use client";
import Image from "next/image";
import {
    ImageCard,
    ItemCard,
    ListBuilding,
    SectionDetails,
    TextBox,
    TextInform,
    TextInformItem,
    TitleCard,
} from "./page.styled";

export default function Details() {
    return (
        <main>
            <SectionDetails>
                <ListBuilding>
                    <ItemCard>
                        <ImageCard
                            src="/assets/images/imagesDetails/image-1.jpg"
                            alt="Image 1"
                        />
                        <TextBox>
                            <TitleCard>The Marina Torch</TitleCard>
                            <TextInform className="font-bold font-Lato leading-[22px] mb-[10px]">
                                <TextInformItem>6 500 000 Dhs</TextInformItem>
                                <TextInformItem>Yield 9.25%</TextInformItem>
                                <TextInformItem>Sold 75%</TextInformItem>
                            </TextInform>
                            <TextInform className="font-bold font-Lato leading-[22px]">
                                <TextInformItem>
                                    Tiket - 60 000 Dhs
                                </TextInformItem>
                                <TextInformItem>Days left 150 </TextInformItem>
                            </TextInform>
                        </TextBox>
                    </ItemCard>
                    <ItemCard>
                        <ImageCard
                            src="/assets/images/imagesDetails/image-2.jpg"
                            alt="Image 2"
                        />
                        <TextBox>
                            <TitleCard>The Marina Torch</TitleCard>
                            <TextInform className="font-bold font-Lato leading-[22px] mb-[10px]">
                                <TextInformItem>6 500 000 Dhs</TextInformItem>
                                <TextInformItem>Yield 9.25%</TextInformItem>
                                <TextInformItem>Sold 75%</TextInformItem>
                            </TextInform>
                            <TextInform className="font-bold font-Lato leading-[22px]">
                                <TextInformItem>
                                    Tiket - 60 000 Dhs
                                </TextInformItem>
                                <TextInformItem>Days left 150 </TextInformItem>
                            </TextInform>
                        </TextBox>
                    </ItemCard>
                    <ItemCard>
                        <ImageCard
                            src="/assets/images/imagesDetails/image-3.jpg"
                            alt="Image 3"
                        />
                        <TextBox>
                            <TitleCard>The Marina Torch</TitleCard>
                            <TextInform className="font-bold font-Lato leading-[22px] mb-[10px]">
                                <TextInformItem>6 500 000 Dhs</TextInformItem>
                                <TextInformItem>Yield 9.25%</TextInformItem>
                                <TextInformItem>Sold 75%</TextInformItem>
                            </TextInform>
                            <TextInform className="font-bold font-Lato leading-[22px]">
                                <TextInformItem>
                                    Tiket - 60 000 Dhs
                                </TextInformItem>
                                <TextInformItem>Days left 150 </TextInformItem>
                            </TextInform>
                        </TextBox>
                    </ItemCard>
                    <ItemCard>
                        <ImageCard
                            src="/assets/images/imagesDetails/image-4.jpg"
                            alt="Image 4"
                        />
                        <TextBox>
                            <TitleCard>The Marina Torch</TitleCard>
                            <TextInform className="font-bold font-Lato leading-[22px] mb-[10px]">
                                <TextInformItem>6 500 000 Dhs</TextInformItem>
                                <TextInformItem>Yield 9.25%</TextInformItem>
                                <TextInformItem>Sold 75%</TextInformItem>
                            </TextInform>
                            <TextInform className="font-bold font-Lato leading-[22px]">
                                <TextInformItem>
                                    Tiket - 60 000 Dhs
                                </TextInformItem>
                                <TextInformItem>Days left 150 </TextInformItem>
                            </TextInform>
                        </TextBox>
                    </ItemCard>
                </ListBuilding>
            </SectionDetails>
        </main>
    );
}
