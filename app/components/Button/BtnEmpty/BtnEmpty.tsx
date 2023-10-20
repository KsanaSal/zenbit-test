import { ButtonEmpty } from "./BtnEmpty.styled";

const BtnEmpty = ({
    radius,
    text,
    link,
    title,
}: {
    radius: number;
    text: string;
    link: string;
    title: string;
}) => {
    return (
        <ButtonEmpty radius={radius} href={link} title={title}>
            {text}
        </ButtonEmpty>
    );
};

export default BtnEmpty;
