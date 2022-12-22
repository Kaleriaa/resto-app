import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Basket from '../../img/cart.png'
import { useSelector } from "react-redux"
import { totalSelector } from "../../selectors"

export const Header = () => {
    const total = useSelector(totalSelector)
    return (
        <Nav>
            <Menu>
                <NavItem><Link to='/'>Menu</Link></NavItem>
                <div style={{ display: "flex", justifyContent: "center", gap: "4px" }}>
                    <img src={Basket} />
                    <NavItem><Link to='/cart'>Total: ${total}</Link></NavItem>
                </div>
            </Menu>
        </Nav>
    )
}
const Nav = styled.nav`
    position: fixed;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    height: 75px;
    z-index: 2;
`
const Menu = styled.div`
    display: flex;
    height: 100%;
    width: 900px;
    margin: 0 auto;
    justify-content: flex-end;
    align-items: center;
    gap: 45px;
    @media (min-width: 1900px) {
        width: 1500px
    }
`
const NavItem = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    list-style: none;
    a {
        color: #fff;
        text-decoration: none;
    }
`
