import { HeaderStyle } from "./styles";
import Logo from '../../images/Logo.png'
import { useState } from "react";
import menuMobile from '../../images/menu_mobile.png'
import closeMenu from '../../images/xmark.png'

export const Header = ({ sidebar, setSidebar }) => {
    const [width, setWidth] = useState(window.screen.width)

    const showSiderbar = () => {
        setSidebar(!sidebar)
    }

    const closeSidebar = () => {
        setSidebar(false)
    }

    window.onresize = window.onload = () => {
        setWidth(window.screen.width)
        if(width >= 800){
            setSidebar(false)
        }
    }

    return(
        <HeaderStyle>
            <div>
                <img src={Logo} alt='Logo'/>
            </div>
            {width > 800 ? (
                    <div className="buttons">
                        <nav>
                            <button>Carros</button>
                            <button>Motos</button>
                            <button>Leilão</button>
                        </nav>
                        <div className="userArea">
                            <button>Fazer Login</button>
                            <button className="register">Cadastrar</button>
                        </div>
                    </div> 
                )
                :
                (
                    <div>
                        {!sidebar ? (
                                <button className="mobileBtn" onClick={showSiderbar}>
                                    <img src={menuMobile} alt='Menu mobile' className="menuMobile"/>
                                </button>
                            ) 
                            : 
                            (
                                <button className="mobileBtn" onClick={closeSidebar}>
                                    <img src={closeMenu} alt='Close menu mobile' className="closeMenu"/>
                                </button>  
                            )
                        }
                    </div>
                    
                )
            }
        </HeaderStyle>
    )
};