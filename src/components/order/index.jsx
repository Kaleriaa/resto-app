import NotFound from '../../img/search.png'
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { orderSelector, totalSelector } from "../../selectors"
import { cartAdded, orderDeletedAll, orderDeletedPosition } from '../../actions'

const OrderNotFound = () => (
    <>
        <img style={{ margin: "0 auto" }} src={NotFound} width={100} height={100} />
        <Label>You haven`t added anything to the cart.</Label>
    </>
)
export const Order = () => {
    const items = useSelector(orderSelector)
    const totalPrice = useSelector(totalSelector)
    const dispatch = useDispatch()
    const onDeletePosition = (id) => {
        dispatch(orderDeletedPosition(id))
    }
    const onAddPosition = (id) => {
        dispatch(cartAdded(id))
    }
    const onDeleteAll = (id) => {
        dispatch(orderDeletedAll(id))
    }
    return (
        <CartBlock>
            <Label>Order</Label>
            {
                items.length ? items.map(item => {
                    const { title, id, price } = item.orderItem
                    return <Block key={id}>
                        <Content>{title}</Content>
                        <Content>{price * item.count}$</Content>
                        <div style={{ flexBasis: '50%' }}>
                            <Counter onClick={() => onDeletePosition(id)}>-</Counter>
                            <Content>{item.count}</Content>
                            <Counter onClick={() => onAddPosition(id)}>+</Counter>
                        </div>
                        <Trash
                            onClick={() => onDeleteAll(id)}
                            className="btn btn-trash btn-sm">
                            <i className="fa fa-trash" />
                        </Trash>
                    </Block>
                }) : <OrderNotFound />
            }
            <Label style={{ textAlign: 'right' }}>Total: {totalPrice}$</Label>
        </CartBlock>
    )
}
const CartBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 600px;
    min-height: 200px;
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
const Label = styled.h1`
    font-size: 22px;
    text-align: center;
    font-weight: 600px;
    ::selection {
        background-color: var(--primary-color);
    }
`
const Block = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 15px 0 10px;
`
const Content = styled.span`
    font-size: 19px;
    width: 350px;
    ::selection {
        background-color: #64a953;
    }
`
const Trash = styled.span`
    cursor: pointer;
    color: #810c0c;
    font-size: 19px;
    transition: all 0.2s;
    :hover {
        font-size: 22px;
        color: #c22a2a;
    }
    :active {
        color: #e80909;
    }
`
const Counter = styled.button`
    cursor: pointer;
    margin: 0px 8px;
    border: 2px solid #e7e7e7;
    background-color: #fff;
    border-radius: 3px;
    width: 25px;
    height: 25px;
    font-size: 18px;
    :hover {
        background-color: #eeeeee;
    }
`