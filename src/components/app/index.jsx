import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../app-header'
import { MainPage } from '../pages/main-page'
import { CartPage } from '../pages/cart-page'

export const App = () => {
    return (
        <BrowserRouter>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    )
}
const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
`