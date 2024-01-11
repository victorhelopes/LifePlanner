import * as S from './styles'

interface linkInterface{
    text: string;
    link: string;
}

export function Link({text, link}: linkInterface){
    return (
        <S.Link href={link}>
            {text}
        </S.Link>
    );
}