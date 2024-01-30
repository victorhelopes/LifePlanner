import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/index'
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { PasswordReset } from './pages/PasswordReset';
import { FinanceInfos } from './pages/FinanceInfos';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route  path = "/" element={<Home/>}/>
            <Route  path = "/Finance-infos" element={<FinanceInfos/>}/>
            <Route  path = "/Login" element={<Login/>}/>
            <Route  path = "/CreateAccount" element={<CreateAccount/>}/>
            <Route  path = "/PasswordReset" element={<PasswordReset/>}/>
        </Routes>
    );
}