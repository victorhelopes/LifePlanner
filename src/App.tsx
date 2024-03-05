import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components/Navbar';

import PagesRoutes from './routes'

import { GlobalStyle } from './globalStyles';
import * as S from './globalStyles'


function App() {
 return (
   <>
    <GlobalStyle/>
    
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"/>
    
    <BrowserRouter>
      <S.Container>
        <PagesRoutes/>
      </S.Container>
    </BrowserRouter>

   </>
 );
}

export default App;