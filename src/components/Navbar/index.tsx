import { useNavigate,  } from 'react-router-dom';

import * as S from './styles';

const NavbarItems = [
    {
        icon: 'home',
        iconType: 'material-icons',
        title: 'Home',
        link: '/'
    },
    {
        icon: 'update',
        iconType: 'material-icons-outlined',
        title: 'Rotina',
        link: '/Routine'
    },
    {
        icon: 'attach_money',
        iconType: 'material-icons-outlined',
        title: 'Financeiro',
        link: '/Finance-infos'
    },
    {
        icon: 'check_circle',
        iconType: 'material-icons-outlined',
        title: 'Atividades',
        link: '/Activities'
    },
    {
        icon: 'person',
        iconType: 'material-icons',
        title: 'Perfil',
        link: '/Profile'
    },
]

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