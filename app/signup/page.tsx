"use client";
import { useState } from "react";
import {
    ButtonSignup,
    FormSignup,
    FormSignupBox,
    ImageSignup,
    InputSignup,
    LabelSignup,
    LinkSignup,
    SectionSignup,
    TextSignup,
    TitleSignup,
} from "./page.styled";
import { useRouter } from "next/navigation";

const initialFormData = {
    name: "",
    email: "",
    password: "",
};

export default function SignUp() {
    const [formData, setFormData] = useState(initialFormData);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:3000/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: formData.name,
                        password: formData.password,
                        email: formData.email,
                    }),
                }
            );
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
            <SectionSignup>
                <ImageSignup
                    src="/assets/images/image-signup.jpg"
                    alt="Image 1"
                />
                <FormSignupBox>
                    <TitleSignup>Sign up</TitleSignup>
                    <FormSignup onSubmit={handleSubmit}>
                        <LabelSignup className="mb-[20px]">
                            Name
                            <InputSignup
                                type="text"
                                name="name"
                                placeholder="Name"
                                autoComplete="off"
                                className="font-regular font-Lato leading-[22px]"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </LabelSignup>
                        <LabelSignup className="mb-[20px]">
                            Email
                            <InputSignup
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="off"
                                className="font-regular font-Lato leading-[22px]"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </LabelSignup>
                        <LabelSignup className="mb-[10px]">
                            Password
                            <InputSignup
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="off"
                                className="font-regular font-Lato leading-[22px]"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </LabelSignup>
                        <LinkSignup
                            href="#"
                            className="font-bolt font-Lato leading-[22px]"
                        >
                            Forgot password?
                        </LinkSignup>
                        <ButtonSignup
                            type="submit"
                            disabled={
                                formData.email === "" ||
                                formData.password === "" ||
                                formData.name === ""
                            }
                        >
                            Sign Up
                        </ButtonSignup>
                    </FormSignup>
                    <TextSignup className="font-bolt font-Lato leading-[22px]">
                        Don’t have account?{" "}
                        <LinkSignup href="/login">Sign In</LinkSignup>
                    </TextSignup>
                </FormSignupBox>
            </SectionSignup>
        </main>
    );
}
