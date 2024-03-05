import * as S from './styles'

interface TextfieldInterface {
    placeholder: string;
    setValue: (value: any)=> void;
    value?: string | number;
    maxWidth?: string;
    label?: string;
    type?: string;
    error?: string;
}

export function Textfield({placeholder, maxWidth, setValue, value, label, type, error}: TextfieldInterface){
    return(
        <S.TextFieldBody maxWidth={maxWidth}>
           <S.Label>{label}</S.Label>
           <S.Input placeholder={placeholder} type={type} onChange={(e)=>{setValue(e.target.value)}} value={value} error={error}/>
           {error && <S.Error>{error}</S.Error>}
        </S.TextFieldBody>
    ); 
}