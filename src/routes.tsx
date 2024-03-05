import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/index'
import { Login } from './pages/Login';
import { CreateAccount } from './pages/CreateAccount';
import { PasswordReset } from './pages/PasswordReset';
import { FinanceInfos } from './pages/FinanceInfos';
import { CreateTask } from './pages/CreateTask';
import { Profile } from './pages/Profile';

import Layout from './layout';
import { UpdateTask } from './pages/UpdateTask';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route  path = "/" element={<Home/>}/>
                <Route  path = "/Login" element={<Login/>}/>
                <Route  path = "/Create-task" element={<CreateTask/>}/>
                <Route  path = "/Update-task/:id" element={<UpdateTask/>}/>
                <Route  path = "/Finance-infos" element={<FinanceInfos/>}/>
                <Route  path = "/CreateAccount" element={<CreateAccount/>}/>
                <Route  path = "/PasswordReset" element={<PasswordReset/>}/>
                <Route  path = "/Profile" element={<Profile/>}/>
            </Route>
        </Routes>
    );
}