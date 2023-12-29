import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import PagesRoutes from './routes'


import * as S from './globalStyles'

function App() {
 return (
   <>
   <GlobalStyle/>
  <BrowserRouter>
    <S.Container>
      <PagesRoutes/>
    </S.Container>
  </BrowserRouter>
   </>
 );
}

export default App;