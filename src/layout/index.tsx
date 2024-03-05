import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { useEffect, useState } from "react"

import * as S from './styles'

export default function Layout(){
    const [showNavbar, setShowNavbar] = useState(false);

    const location = useLocation();

    useEffect(()=>{
        const hideNavbar = ['/login', '/createaccount']
        const isNavbarHidden = !hideNavbar.some(
            (path) => location.pathname.toLocaleLowerCase().indexOf(path) === 0,
          );
          setShowNavbar(isNavbarHidden);
    },[location.pathname])

    return(
        <S.Layout>
            { showNavbar && <Navbar/> }
            <Outlet />
        </S.Layout>
    )
}