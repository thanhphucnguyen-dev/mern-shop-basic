import { Row } from 'antd'
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
  padding: 16px 80px;
  background-color: rgb(9, 61, 31);
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const WrapperHeaderLeft = styled.span`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
`

export const WrapperHeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 20px;
`

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: right;

  span:first-child {
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffd700;
    }
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;  /* Increased gap for clarity */
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffd700;  /* Golden hover effect for cart */
  }
`
