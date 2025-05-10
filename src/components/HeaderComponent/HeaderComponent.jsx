import { Col } from 'antd'
import {
  WrapperHeader,
  WrapperHeaderLeft,
  WrapperHeaderRight,
  AccountWrapper,
  CartWrapper
} from './style'
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const HeaderComponent = () => {
  return (
    <WrapperHeader>
      <Col span={6}>
        <WrapperHeaderLeft>
          <h2 style={{ margin: 0, color: '#1890ff', fontWeight: 500 }}>Fruits-Shop</h2>
        </WrapperHeaderLeft>
      </Col>

      <Col span={12}>
        <ButtonInputSearch
          placeholder="Tìm kiếm sản phẩm..."
          size="large"
          textButton="Tìm kiếm"
        />
      </Col>

      <Col
        span={6}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 24
        }}
      >
        <WrapperHeaderRight>
          <UserOutlined style={{ fontSize: 24 }} />
          <AccountWrapper>
            <span style={{ fontWeight: 500 }}>Đăng nhập / Đăng ký</span>
            <div style={{ fontSize: 14, color: '#eee', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontWeight: 400 }}>Tài khoản</span> <CaretDownOutlined style={{ fontSize: 14 }} />
            </div>
          </AccountWrapper>
        </WrapperHeaderRight>

        <CartWrapper>
          <ShoppingCartOutlined style={{ fontSize: 24 }} />
          <span style={{ fontWeight: 500 }}>Giỏ hàng</span>
        </CartWrapper>
      </Col>
    </WrapperHeader>
  )
}

export default HeaderComponent
