"use client";

import { ImageLogin, SectionLogin } from "./page.styled";

export default function Login() {
    return (
        <main className="pt-[80px]">
            <SectionLogin>
                <ImageLogin
                    src="/assets/images/imagesDetails/image-1.jpg"
                    alt="Image 1"
                />
                <div>
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                    </form>
                    <p>Don’t have account? Sign Up</p>
                </div>
            </SectionLogin>
        </main>
    );
}
