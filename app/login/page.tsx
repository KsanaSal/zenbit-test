"use client";
import { useState } from "react";
import {
    ButtonLogin,
    FormLogin,
    FormLoginBox,
    ImageLogin,
    InputLogin,
    LabelLogin,
    LinkLogin,
    SectionLogin,
    TextLogin,
    TitleLogin,
} from "./page.styled";
import { useRouter } from "next/navigation";

const initialFormData = {
    email: "",
    password: "",
};

export default function Login() {
    const [formData, setFormData] = useState(initialFormData);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const response = await fetch(`${apiUrl}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: formData.password,
                    email: formData.email,
                }),
            });
            if (response.status === 200) {
                response.json().then((data) => {
                    window.localStorage.setItem("token", data.result.token);
                    router.push("/");
                    console.log(
                        "Registration was successful",
                        data.result.token
                    );
                });
            } else if (response.status === 409) {
                console.error("Username already exists");
            } else {
                console.error("An error occurred during registration");
            }
        } catch (error) {
            console.error(
                "An error occurred while sending data to the server",
                error
            );
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <main className="pt-[80px]">
            <SectionLogin>
                <ImageLogin
                    src="/assets/images/image-login.jpg"
                    alt="Image 1"
                />
                <FormLoginBox>
                    <TitleLogin>Login</TitleLogin>
                    <FormLogin onSubmit={handleSubmit}>
                        <LabelLogin className="mb-[20px]">
                            Email
                            <InputLogin
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="off"
                                className="font-regular font-Lato leading-[22px]"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </LabelLogin>
                        <LabelLogin className="mb-[10px]">
                            Password
                            <InputLogin
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="off"
                                className="font-regular font-Lato leading-[22px]"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </LabelLogin>
                        <LinkLogin
                            href="#"
                            className="font-bolt font-Lato leading-[22px]"
                        >
                            Forgot password?
                        </LinkLogin>
                        <ButtonLogin type="submit">Sign In</ButtonLogin>
                    </FormLogin>
                    <TextLogin className="font-bolt font-Lato leading-[22px]">
                        Don’t have account?{" "}
                        <LinkLogin href="/signup">Sign Up</LinkLogin>
                    </TextLogin>
                </FormLoginBox>
            </SectionLogin>
        </main>
    );
}
