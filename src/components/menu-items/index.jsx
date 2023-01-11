import React from "react";
import styled from "styled-components";

export const CardItem = ({ menuItem, onClick }) => {
    const { title, price, url, category, id } = menuItem
    return (
        <Card>
            <Name>{title}</Name>
            <img style={{ margin: "10px auto", display: "block" }} src={url} width={'100%'} height={177} />
            <Description>Category: <strong>{category}</strong></Description>
            <Description>Price: <strong>{price}$</strong></Description>
            <AddButton onClick={() => onClick(id)}>Add to cart</AddButton>
        </Card>
    )
}
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    width: 280px;
    height: 360px;
    padding: 20px;
    border-radius: 5px;
`
const Name = styled.span`
    color: #000;
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
`
const Description = styled.span`
    margin-top: 10px;
`
const AddButton = styled.button`
    cursor: pointer;
    width: 120px;
    margin-top: 10px;
    height: 35px;
    font-size: 16px;
    background-color: var(--secondary-color);
    border: 2px solid var(--primary-color);
    color: black;
    border-radius: 5px;
    :hover{
        background-color: #d6e8e0;
    }
`