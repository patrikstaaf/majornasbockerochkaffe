import styled from 'styled-components'

const StyledMap = styled.iframe`
  border: 0;
  margin: auto;
  display: block;
  height: 100%;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const Map = () => {
  return (
    <StyledMap
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.146078207336!2d11.928219115809265!3d57.69698798111776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3484c99eba3%3A0x7fa4782120b55e0!2zQWxsbcOkbm5hIHbDpGdlbiAyMiwgNDE0IDYwIEfDtnRlYm9yZw!5e0!3m2!1ssv!2sse!4v1663616187513!5m2!1ssv!2sse"
      width="600"
      height="500"
      loading="lazy"
    ></StyledMap>
  )
}

export default Map
