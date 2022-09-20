import styled from 'styled-components'

interface Props {
  Color: boolean
}

const StyledButton = styled.button<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 16px;
  gap: 8px;
  border: 2px solid ${(props) => (props.Color ? '#1e1f22' : '#fbf6ef')};
  height: 48px;
  line-height: 25px;
  font-size: 21px;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => (props.Color ? '#1e1f22' : '#fbf6ef')};
  @media screen and (min-width: 1440px) {
    height: 57px;
  }
`
const Button = ({}) => {
  return <StyledButton Color={true}>Hitta till butiken</StyledButton>
}

export default Button
