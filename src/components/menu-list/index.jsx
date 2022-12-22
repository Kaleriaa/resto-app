import React, { useEffect, useState } from 'react'
import { CardItem } from '../menu-items'
import styled from 'styled-components'
import { Container } from '../container'
import WithRestoService from '../hoc'
import { useDispatch, useSelector } from 'react-redux'
import { menuLoaded, menuRequested, cartAdded } from '../../actions'
import { Spinner } from '../spinner'
import { FilterPanel } from '../filter-panel'

const MenuList = (props) => {
    const menuItems = useSelector(state => state.menu)
    const [visibleMenu, setVisibleMenu] = useState([])
    const spinner = useSelector(state => state.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        const { RestoService } = props
        dispatch(menuRequested())
        RestoService.getMenuItem()
            .then(items => { dispatch(menuLoaded(items)) })
    }, [dispatch])
    useEffect(() => setVisibleMenu(menuItems), [menuItems])
    const onAddCart = (id) => {
        dispatch(cartAdded(id))
    }

    const onFilter = (str) => {
        if (str === 'all') { return setVisibleMenu(menuItems) }
        setVisibleMenu(menuItems.filter(item => item.category === str))
    }

    return (
        <Container>
            <FilterPanel onFilter={onFilter} />
            <MenuWrapper>
                {
                    spinner ? <Spinner /> : visibleMenu.map(item => {
                        const { id } = item
                        return <CardItem key={id} onClick={onAddCart} menuItem={item} />
                    })
                }
            </MenuWrapper>
        </Container>
    )
}
const MenuWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
`

export default WithRestoService(MenuList)