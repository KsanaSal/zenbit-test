"use client";
import Image from "next/image";
import { SectionDetails } from "./page.styled";

export default function Details() {
    return (
        <SectionDetails>
            <ul>
                <li>
                    <Image
                        src="/assets/images/imagesDetails/image-1.jpg"
                        alt="Image 1"
                        width={630}
                        height={400}
                    />
                    <div>
                        <h2>The Marina Torch</h2>
                        <ul>
                            <li>6 500 000 Dhs</li>
                            <li>Yield 9.25%</li>
                            <li>Sold 75%</li>
                        </ul>
                        <ul>
                            <li>Tiket - 60 000 Dhs</li>
                            <li>Days left 150 </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Image
                        src="/assets/images/imagesDetails/image-2.jpg"
                        alt="Image 2"
                        width={630}
                        height={400}
                    />
                    <div>
                        <h2>The Marina Torch</h2>
                        <ul>
                            <li>6 500 000 Dhs</li>
                            <li>Yield 9.25%</li>
                            <li>Sold 75%</li>
                        </ul>
                        <ul>
                            <li>Tiket - 60 000 Dhs</li>
                            <li>Days left 150 </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Image
                        src="/assets/images/imagesDetails/image-3.jpg"
                        alt="Image 3"
                        width={630}
                        height={400}
                    />
                    <div>
                        <h2>The Marina Torch</h2>
                        <ul>
                            <li>6 500 000 Dhs</li>
                            <li>Yield 9.25%</li>
                            <li>Sold 75%</li>
                        </ul>
                        <ul>
                            <li>Tiket - 60 000 Dhs</li>
                            <li>Days left 150 </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Image
                        src="/assets/images/imagesDetails/image-4.jpg"
                        alt="Image 4"
                        width={630}
                        height={400}
                    />
                    <div>
                        <h2>The Marina Torch</h2>
                        <ul>
                            <li>6 500 000 Dhs</li>
                            <li>Yield 9.25%</li>
                            <li>Sold 75%</li>
                        </ul>
                        <ul>
                            <li>Tiket - 60 000 Dhs</li>
                            <li>Days left 150 </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </SectionDetails>
    );
}
