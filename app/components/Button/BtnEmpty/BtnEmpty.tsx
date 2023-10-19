import { ButtonEmpty } from "./BtnEmpty.styled";

const BtnEmpty = ({
    radius,
    text,
    link,
}: {
    radius: number;
    text: string;
    link: string;
}) => {
    return (
        <ButtonEmpty radius={radius} href={link}>
            {text}
        </ButtonEmpty>
    );
};

export default BtnEmpty;
