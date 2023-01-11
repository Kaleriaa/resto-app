import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const FilterPanel = ({ onFilter }) => {
    const [selectedTab, setSelectedTab] = useState('all')

    useEffect(() => {
        onFilter(selectedTab)
    }, [selectedTab])

    return (
        <Filters>
            <FilterCategory onClick={() => setSelectedTab('all')}>All</FilterCategory>
            <FilterCategory onClick={() => setSelectedTab('salads')}>Salad</FilterCategory>
            <FilterCategory onClick={() => setSelectedTab('pizza')}>Pizza</FilterCategory>
            <FilterCategory onClick={() => setSelectedTab('meat')}>Meat</FilterCategory>
        </Filters>
    )
}

const Filters = styled.div`
    width: 28%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    position: relative;
    * {
        z-index: 2;
    }
`
const FilterCategory = styled.span`
    cursor: pointer;
    border-radius: 99px;
    color: #fff;
    font-size: 22px;
    line-height: 30px;
    transition: color 0.15s ease-in;
`