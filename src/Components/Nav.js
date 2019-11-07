import React from "react";
import NasaLogo from "../../src/img/NasaLogo.jpg";
import styled from 'styled-components';

const StyledNav = styled.div`
background-color: #e8ebec;
border-bottom: 1px solid black;
`

const Nav = () => {
    return(
        <StyledNav className="navbar">
            <div><img className="logo" src={NasaLogo} alt='nasa_logo'/></div>
            <nav>
                <a href="#">Subscribe</a>
                <a href="#">Menu</a>
            </nav>
        </StyledNav>

    )
}

export default Nav;