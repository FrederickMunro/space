import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import PlanetTitle from './PlanetTitle';
import Planet3D from './Planet3D';

interface PlanetProps {
  planet: {
    name: string;
    icon: string;
    daylength: number;
    size: number;
    sizeNum: number;
    tilt: number;
    link: string;
    isClicked: number;
    color: string;
    handleClicked: Function;
    image: string;
    yearlength: number;
  }
};

const Planet = ({ planet }: PlanetProps) => {

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false)

  const wasClicked = () => {
    planet.handleClicked();
    setClicked(true)
  }

  const handleHover = () => {
    if (!clicked) setIsHovered(true);
  }

  return(
    <>
      <Group className={`move-${planet.isClicked}`}>
        { 
          isHovered ? (
            <PlanetTitle
              isvisible={isHovered}
              tilt={planet.tilt}
            >
              {planet.name}
            </PlanetTitle> 
          ) : (
            <div 
              style={{height: `${planet.tilt + 43}px`}}
            />
          )
        }
      <Container
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => wasClicked()}
        clicked={clicked}
      >
        <Planet3D
          icon={planet.icon}
          size={planet.size}
          tilt={planet.tilt}
          className={isHovered ? 'hovered' : 'not-hovered'}
          daylength={planet.daylength}
          color={planet.color}
        />
      </Container>
    </Group>
      <Left clicked={clicked}>
        <Top>
          <Landscape src={planet.image} />
        </Top>
        <Bottom>
          <Stat><strong>Name:</strong> {planet.name}</Stat>
          {
            planet.name === 'Earth' || planet.name === 'Mars' ?
              <Stat><strong>Day length:</strong> {planet.daylength} hours</Stat>
              :
              <Stat><strong>Day length:</strong> {planet.daylength} days</Stat>
          }
          <Stat><strong>Year length:</strong> {planet.yearlength} days</Stat>
          <Stat><strong>Radius:</strong> {planet.sizeNum} km</Stat>
          <Stat><strong>Tilt:</strong> {planet.tilt} degrees</Stat>
        </Bottom>
      </Left>
      <Right clicked={clicked}>
        <Top></Top>
        <Bottom></Bottom>
      </Right>
    </>
  )
}

export default Planet

const centerMercury = keyframes`
  100% {
    transform: translate3d(37.5vw, 0, 0);
  }
`

const centerVenus = keyframes`
  100% {
    transform: translate3d(16vw, 0, 0);
  }
`

const centerEarth = keyframes`
  100% {
    transform: translate3d(-13vw, 0, 0);
  }
`

const centerMars = keyframes`
  100% {
    transform: translate3d(-35vw, 0, 0);
  }
`

const moveLeft = keyframes`
  100% {
    transform: translateX(-75vw);
  }
`

const moveRight = keyframes`
  100% {
    transform: translateX(75vw);
  }
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  &.move-1 {
  animation-duration: 2.5s;
    animation-name: ${centerMercury};
  }
  &.move-2 {
  animation-duration: 2.5s;
    animation-name: ${centerVenus};
  }
  &.move-3 {
  animation-duration: 2.5s;
    animation-name: ${centerEarth};
  }
  &.move-4 {
  animation-duration: 2.5s;
    animation-name: ${centerMars};
  }
  &.move-5 {
  animation-duration: 2s;
    animation-name: ${moveLeft};
  }
  &.move-6 {
  animation-duration: 2s;
    animation-name: ${moveRight};
  }
`

const Container = styled.div<{ clicked:boolean }>`
  display: flex;
  flex-direction: column;
  cursor: ${props => props.clicked ? 'default' : 'pointer'};
`

const Left = styled.div<{ clicked:boolean }>`
  position: fixed;
  height: 90vh;
  width: 30%;
  left: 10%;
  top: 15vh;
  display: flex;
  flex-direction: column;
  visibility: ${props => props.clicked ? 'visible' : 'hidden'};
  opacity: ${props => props.clicked ? 1 : 0};
  transition: opacity 1s ease 2.5s;
  pointer-events: none;
`

const Right = styled.div<{ clicked:boolean }>`
  position: fixed;
  height: 100vh;
  width: 30%;
  right: 5%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  visibility: ${props => props.clicked ? 'visible' : 'hidden'};
  opacity: ${props => props.clicked ? 1 : 0};
  transition: opacity 1s ease 2.5s;
  pointer-events: none;
`

const Bottom = styled.div`
  width: 100%;
  height: 30%;
`

const Top = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

const Landscape = styled.img`
  height: 100%;
  aspect-ratio: 1 2;
`

const Stat = styled.p`
  font-size: 40px;
  color: white;
  font-family: Courier, monospace;
  margin-left: 20%;
`