import React from "react"
import styled from "styled-components"
import { Container } from "../container"
import { Order } from "../order"


export const CartPage = () => { 
    return (
        <CartWrapper>
            <Order />
        </CartWrapper>
    )
}
const CartWrapper = styled(Container)`
    min-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
`

