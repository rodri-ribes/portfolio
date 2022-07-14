import styled from "styled-components";

export const Portada = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100%;
    height: 100vh;

    a{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: auto;
        padding-top: 5rem;
    }

    a svg{
        font-size: 50px;
        color: red;
        animation-name: Iconbottom;
        animation-iteration-count: infinite;
        animation-duration: 1s;
        animation-direction: alternate;
    }

    h1{
        text-align: center;
        color: white;
        font-family: 'Patrick Hand', cursive;
        font-size: 60px;
        letter-spacing: 5px;
        text-shadow: -3px -3px 3px black, -3px -3px 3px black, -3px -3px 3px black;
    }
    h1::selection{
        background-color: transparent;
    }
    b{
        color: red;
        text-shadow: -3px -3px 3px black, -3px -3px 3px black, -3px -3px 3px black;
    }
    b::selection{
        background-color: transparent;
    }
    span {
        display: block;
        font-family: 'Patrick Hand', cursive;
        white-space: nowrap;
        border-right: 4px solid;
        width: 25ch;
        text-shadow: -3px -3px 3px black, -3px -3px 3px black, -3px -3px 3px black;
        font-size: 60px;
        color: white;
        animation: typing 5s steps(12), blink .5s infinite step-end alternate;
        overflow:hidden;
    }
    span::selection{
        background-color: transparent;
    }
    @keyframes typing{
        from { 
            width: 0;
        }
    }
    @keyframes blink{
        50% { 
            border-color: transparent
        }
    }
    
    @keyframes Iconbottom{
        0%{
            transform: translateY(0)
        }

        50%{
            transform: translateY(10px)
        }

        100%{
            transform: translateY(15px);
            transform: scale(1.2);
        }
    }

    @media screen and (max-width: 968px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        width: 100%;
        height: 100vh;

        h1{
            font-size: 25px;
        }
        span{
            font-size: 25px;
            margin-top: 1rem;
        }
    } 

`;

export const NavbarContainer = styled.div`
    width: 100%;
    height: 9vh;
    position: sticky;
    top: 0;
    z-index: 99;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    margin-bottom: 50px;
    `;


export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 968px){
        justify-content: flex-end;
        margin-right: 1rem;
    }
`;


export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 70px;
        left: ${({ click }) => (click ? 0 : "-100%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #1d363f;
    }
    `;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "Oswald";
    font-weight: 400;
    cursor: pointer;
    
    &:hover{
        background-color: #2c5263;
        border-bottom: 0.3rem solid #102128;
        transition: 0.4s ease-in;
    }
    
    @media screen and (max-width: 968px){
        width: 100%;
        height: 100px;
        position: relative;
        bottom: 100px;
        margin: 1rem 0;
        &:hover{
            border-bottom: none
        }
    }
    `;

export const MenuItemLink = styled.div`
    color: #ebc08b;
    font-size: 1.5rem;
    
    div{
        display: flex;
    }
    
    div a{
        text-decoration: none;
        color: white;
    }

    svg{
        display: none;
    }
    @media screen and (max-width: 968px){ 
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
        display: flex;

        svg{
            display: flex;
            margin-right: 1rem;
            text-align: center;
        }
        div{
            width: auto;
            height: 100%;
            align-items: center;
        }
    }
`;

export const IconLogoMovile = styled.div`
    display: none;

    @media screen and (max-width: 968px){
        display: flex;
        color: #ebebeb;
        font-size: 2rem;
        padding-right: 15px;
    }
`;