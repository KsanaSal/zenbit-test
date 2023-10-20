"use client";

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

export default function Login() {
    return (
        <main className="pt-[80px]">
            <SectionLogin>
                <ImageLogin
                    src="/assets/images/image-login.jpg"
                    alt="Image 1"
                />
                <FormLoginBox>
                    <TitleLogin>Login</TitleLogin>
                    <FormLogin>
                        <LabelLogin className="mb-[20px]">
                            Email
                            <InputLogin
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="off"
                                className="font-regular font-Lato leading-[22px]"
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
