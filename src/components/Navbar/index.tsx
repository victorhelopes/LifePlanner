import { useNavigate,  } from 'react-router-dom';

import * as S from './styles';
import { NavbarItems } from '../../constants/navbarItems';

export function Navbar(){
    const navigate = useNavigate();

    function goToPage(link: string){
        navigate(link)
    }

    return(
        <S.Navbar>
            {NavbarItems.map((item)=>{
                return(<S.MenuItem 
                    isActive={window.location.pathname === item.link}
                    onClick={()=>{
                        goToPage(item.link)
                    }}    
                >
                    <span className={item.iconType}>{item.icon}</span>
                    {item.title}
                </S.MenuItem>)
            })}
        </S.Navbar>
    )
}