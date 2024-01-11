import * as S from './styles'

export function Navbar(){
    return(
        <S.Navbar>
            <S.MenuItem>
                <span className="material-icons">home</span>
                Home
            </S.MenuItem>

            <S.MenuItem>
                <span className="material-icons-outlined">update</span>
                Rotina
            </S.MenuItem>
            
            <S.MenuItem>
                <span className="material-icons">attach_money</span>
                Financeiro
            </S.MenuItem>

            <S.MenuItem>
                <span className="material-icons-outlined">check_circle</span>
                Atividades
            </S.MenuItem>

            <S.MenuItem>
                <span className="material-icons">person</span>
                Perifl
                </S.MenuItem>
        </S.Navbar>
    )
}