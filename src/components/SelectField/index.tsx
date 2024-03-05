import * as S from './styles'

interface SelectInterface {
    placeholder: string;
    options: OptionsInterface[];
    maxWidth?: string;
    label?: string;
    type?: string;
    valueSelected: string;
    setValue: (value: any)=>void;
}

interface OptionsInterface {
    value: string;
    label: string;
}


export function SelectField({placeholder, options, label, valueSelected, setValue}: SelectInterface){
    return(
        <S.SelectFieldBody>
           <p>{label}</p>
            <S.Select placeholder={placeholder} value={valueSelected} onChange={(e)=>{setValue(e.target.value)}}>
                {options.map(item=>{
                    return <option value={`${item.value}`}>{item.label}</option>})}
            </S.Select>
        </S.SelectFieldBody>
    ); 
}