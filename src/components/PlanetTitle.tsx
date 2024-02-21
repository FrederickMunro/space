import styled from "styled-components"

interface PlanetTitleProps {
  children: any;
  isvisible: boolean;
  tilt: number;
  width: number;
}

interface TitleProps {
  tilt: number;
  width: number;
}

const PlanetTitle = ({ children, isvisible, tilt, width }: PlanetTitleProps) => {

  return(
    <>
      { isvisible && <Title tilt={tilt} width={width}>{children}</Title> }
    </>
  )
}

export default PlanetTitle

const Title = styled.h2<TitleProps>`
  color: white;
  margin: 0;
  padding: 0;
  margin-bottom: ${props => `${props.tilt + 15}px`};
  font-family: Arial, sans-serif;
  font-size: 25px;
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid transparent;
  border-left: 0.15em solid transparent;
  white-space: nowrap;
  letter-spacing: .1em;
  user-select: none;
  pointer-events: none;
  color: transparent;
  width: ${props => props.width}%;
  text-align: center;
  animation: 
    typing-h2 1.5s steps(30, end) forwards;

  @keyframes typing-h2 {
    from {
      color: white;
      width: 0
    }
    to {
      color: white;
      width: 100%;
    }
  }
`