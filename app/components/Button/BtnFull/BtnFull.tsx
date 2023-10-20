import { ButtonFull } from "./BtnFull.styled";

const BtnFull = ({ link }: { link: string }) => {
    return (
        <ButtonFull href={link} title="Sign up page">
            Sign Up
        </ButtonFull>
    );
};

export default BtnFull;
