import { Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { PasswordReset } from './pages/PasswordReset';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route  path = "/Login" element={<Login/>}/>
            <Route  path = "/CreateAccount" element={<CreateAccount/>}/>
            <Route  path = "/PasswordReset" element={<PasswordReset/>}/>
        </Routes>
    );
}