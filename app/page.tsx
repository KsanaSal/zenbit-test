"use client";
// import Image from "next/image";
import { SectionHome } from "./page.styled";

export default function Home() {
    return (
        <main>
            <SectionHome>
                <h1>Home page</h1>
                <p className="text-red-500 font-regular font-Lato">
                    This is the home page
                </p>
            </SectionHome>
        </main>
    );
}
