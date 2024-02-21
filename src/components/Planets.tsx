import styled from 'styled-components';

import Planet from './Planet'

import Mercury from '../assets/mercury.jpg';
import MercuryImage from '../assets/mercury_image.jpg';
import Venus from '../assets/venus.jpg';
import EarthImage from '../assets/earth_image.jpg';
import Earth from '../assets/earth.jpg';
import VenusImage from '../assets/venus_image.jpg';
import Mars from '../assets/mars.jpg';
import MarsImage from '../assets/mars_image.jpg';

import { useState } from 'react';

const Planets = () => {

  type PlanetItem = {
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
  };

  const [isClicked, setIsClicked] = useState<number[]>([0, 0, 0, 0]);

  const handleClicked = (planetNumber: number) => {
    if (planetNumber === 0) setIsClicked([1, 6, 6, 6]);
    if (planetNumber === 1) setIsClicked([5, 2, 6, 6]);
    if (planetNumber === 2) setIsClicked([5, 5, 3, 6]);
    if (planetNumber === 3) setIsClicked([5, 5, 5, 4]);
  }

  const PlanetItemList:PlanetItem[] = [
    { 
      name: 'Mercury',
      icon: Mercury,
      daylength: 176,
      size: 0.38,
      sizeNum: 4879,
      tilt: 0.027,
      link: '/about_me',
      isClicked: isClicked[0],
      color: '#e2e2e2',
      handleClicked: () => handleClicked(0),
      image: MercuryImage,
      yearlength: 88,
      },
    { 
      name: 'Venus',
      icon: Venus,
      daylength: 243,
      size: 0.95,
      sizeNum: 6051.8,
      tilt: 3,
      link: '/education',
      isClicked: isClicked[1],
      color: '#f0d08b',
      handleClicked: () => handleClicked(1),
      image: VenusImage,
      yearlength: 225,
      },
    { 
      name: 'Earth',
      icon: Earth,
      daylength: 24,
      size: 1,
      sizeNum: 6371,
      tilt: 23.5,
      link: '/experience',
      isClicked: isClicked[2],
      color: '#287ab8',
      handleClicked: () => handleClicked(2),
      image: EarthImage,
      yearlength: 1,
      },
    { 
      name: 'Mars',
      icon: Mars,
      daylength: 23.9,
      size: 0.53,
      sizeNum: 3389.5,
      tilt: 25,
      link: '/projects',
      isClicked: isClicked[3],
      color: '#c1440e',
      handleClicked: () => handleClicked(3),
      image: MarsImage,
      yearlength: 687,
      },
  ]

  return(
    <Container>
      {
        PlanetItemList.map((e, i) => {
          return(
              <Planet
                planet={e}
                key={i}
              />
          )
        })
      }
    </Container>
  )
}

export default Planets

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const Left = styled.div`
  position: fixed;
  height: 100%;
  width: 30%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Right = styled.div`
position: fixed;
height: 100%;
width: 30%;
right: 5%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const Bottom = styled.div`
  background: white;
  width: 100%;
  height: 30%;
`

const Top = styled.div`
  background: grey;
  width: 100%;
  height: 40%;
`