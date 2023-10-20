"use client";
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

export default function SignUp() {
    return (
        <main className="pt-[80px]">
            <SectionSignup>
                <ImageSignup
                    src="/assets/images/image-signup.jpg"
                    alt="Image 1"
                />
                <FormSignupBox>
                    <TitleSignup>Sign up</TitleSignup>
                    <FormSignup>
                        <LabelSignup className="mb-[20px]">
                            Name
                            <InputSignup
                                type="text"
                                name="name"
                                placeholder="Name"
                                autoComplete="off"
                                className="font-regular font-Lato leading-[22px]"
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
                            />
                        </LabelSignup>
                        <LinkSignup
                            href="#"
                            className="font-bolt font-Lato leading-[22px]"
                        >
                            Forgot password?
                        </LinkSignup>
                        <ButtonSignup type="submit">Sign Up</ButtonSignup>
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
