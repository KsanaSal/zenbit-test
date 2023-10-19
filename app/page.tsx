"use client";
import BtnEmpty from "./components/Button/BtnEmpty/BtnEmpty";
import { SectionHome, Text, Title } from "./page.styled";

export default function Home() {
    return (
        <main>
            <SectionHome>
                <Title>The chemical negatively charged</Title>
                <Text className="font-regular font-Lato">
                    Numerous calculations predict, and experiments confirm, that
                    the force field reflects the beam, while the mass defect is
                    not formed. The chemical compound is negatively charged.
                    Twhile the mass defect is
                </Text>
                <BtnEmpty radius={8} text={"Get Started"} link={"/details"} />
            </SectionHome>
        </main>
    );
}
