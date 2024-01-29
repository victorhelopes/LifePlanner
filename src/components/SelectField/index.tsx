import * as S from './styles'

interface SelectInterface {
    placeholder: string;
    options: OptionsInterface[];
    maxWidth?: string;
    label?: string;
    type?: string;
}

interface OptionsInterface {
    value: string;
    label: string;
}


export function SelectField({placeholder, options, label}: SelectInterface){
    return(
        <S.TextField>
           <p>{label}</p>
            <S.Select placeholder={placeholder}>
                {options.map(item=>{
                    return <option value={`${item.value}`}>{item.label}</option>})}
            </S.Select>
        </S.TextField>
    ); 
}