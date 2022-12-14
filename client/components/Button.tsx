import styled from 'styled-components'

interface StyledProps {
  Color?: boolean
}

interface Props {
  Color?: boolean
  children: React.ReactNode
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 16px;
  gap: 8px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.Color ? '#1e1f22' : '#fbf6ef')};
  height: 48px;
  line-height: 22px;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => (props.Color ? '#1e1f22' : '#fbf6ef')};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 57px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    line-height: 29px;
    font-size: 24px;
  }
`
const Button: React.FC<Props> = ({ handleClick, children, Color }) => {
  return (
    <StyledButton Color={Color} onClick={handleClick}>
      {children}
    </StyledButton>
  )
}

export default Button
