import styled from 'styled-components'

interface Props {
  backgroundColor: string
}

export const EventDescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const EventDescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
`

export const EventDescriptionColor = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  width: 40px;
  height: 40px;
`
