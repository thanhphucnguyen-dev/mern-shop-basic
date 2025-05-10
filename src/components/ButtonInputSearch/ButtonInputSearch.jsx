import { Button, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const ButtonInputSearch = ({
  size = 'large',
  placeholder = 'Tìm kiếm...',
  textButton = 'Tìm',
  bordered = false,
  backgroundColorInput = '#fff',
  backgroundColorButton = '#0d5cb6',
  colorButton = '#fff'
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: '6px 12px',
        gap: 8,
        width: '100%'
      }}
    >
      <Input
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{
          flex: 1,
          backgroundColor: backgroundColorInput,
          border: bordered ? undefined : 'none'
        }}
      />
      <Button
        size={size}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        style={{
          backgroundColor: backgroundColorButton,
          color: colorButton,
          border: bordered ? undefined : 'none',
          borderRadius: 20,
          fontWeight: 500
        }}
      >
        {textButton}
      </Button>
    </div>
  )
}

export default ButtonInputSearch
