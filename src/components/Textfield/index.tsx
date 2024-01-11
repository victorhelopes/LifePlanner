import * as S from './styles'

interface TextfieldInterface {
    placeholder: string;
    maxWidth?: string;
    label?: string;
    type?: string;
}

export function Textfield({placeholder, maxWidth,  label, type}: TextfieldInterface){
    return(
        <S.TextField maxWidth={maxWidth}>
           <p>{label}</p>
            <S.Input placeholder={placeholder} type={type}/>
        </S.TextField>
    ); 
}