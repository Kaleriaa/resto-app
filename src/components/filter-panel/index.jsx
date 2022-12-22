import React from 'react'
import styled from 'styled-components'

export const FilterPanel = ({ onFilter }) => {
    return (
        <Filters>
            <FilterCategory onClick={() => onFilter('all')}>All</FilterCategory>
            <FilterCategory onClick={() => onFilter('salads')}>Salad</FilterCategory>
            <FilterCategory onClick={() => onFilter('pizza')}>Pizza</FilterCategory>
            <FilterCategory onClick={() => onFilter('meat')}>Meat</FilterCategory>
        </Filters>
    )
}
const Filters = styled.div`
    width: 22%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
`
const FilterCategory = styled.span`
    cursor: pointer;
    border-bottom: 4px solid var(--primary-color);
    color: #fff;
    font-size: 22px;
    line-height: 30px;
`