import * as S from './styles';

interface ButtonInterface {
    placeholder: string;
    backgroundColor: string;
    loading?: boolean;
    borderColor?: string;
    textColor?: string;
    maxWidth?: string;
    onClick?: ()=> void;
}

export function Button({placeholder, backgroundColor, textColor, borderColor, maxWidth, loading, onClick}: ButtonInterface){
    return (
        <>
            <S.Button 
                backgroundColor={backgroundColor} 
                textColor={textColor}
                borderColor={borderColor}
                onClick={onClick}
                maxWidth={maxWidth}
                loading={loading || false}
                disabled={loading || false}
            >{loading? <span  className="material-icons-outlined">autorenew</span>: placeholder}</S.Button>
        </>
    )
}