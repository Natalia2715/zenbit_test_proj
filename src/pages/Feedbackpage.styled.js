import styled from 'styled-components';
import smileYellow from '../images/smile_yellow.png';
import smileRed from '../images/red_smile1.png';
import bgdImgGlobe from '../images/background.png';
import smileYellowBig from '../images/smile_yellow1.png';
import clouds from '../images/clouds.png';
import ellipse from '../images/ellipse.png';

export const Container = styled.div`
  padding-top: 75px;
  @media ${p => p.theme.media.tablet} {
    padding-top: 110px;
    padding-left: 50px;
  }
  @media ${p => p.theme.media.desktop} {
    padding-top: 179px;
    padding-left: 150px;
    padding-right: 150px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
  @media ${p => p.theme.media.tablet} {
    text-align: left;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const YellowSmile = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 18px;
  left: 18px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${smileYellowBig});
  @media ${p => p.theme.media.tablet} {
    width: 70px;
    height: 70px;
  }
  @media ${p => p.theme.media.desktop} {
    top: 30px;
    left: 28px;
    width: 128px;
    height: 128px;
  }
`;

export const Globe = styled.div`
  background-image: none;
  @media ${p => p.theme.media.tablet} {
    left: auto;
    right: 0px;
    position: absolute;
    top: 0px;
    width: 410px;
    height: 610px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${bgdImgGlobe});
  }
  @media ${p => p.theme.media.desktop} {
    
    height: 920px;
    
  }
`;

export const PinkSmile = styled.div`
  position: absolute;
  background-image: none;
  @media ${p => p.theme.media.desktop} {
    background-image: url(${smileRed});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 5;
    top: 558px;
    right: 150px;
    width: 290px;
    height: 290px;
  }
`;

export const BigYellowSmile = styled.div`
  position: absolute;
  background-image: none;
  @media ${p => p.theme.media.desktop} {
    background-image: url(${smileYellow});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 6;
    top: 515px;
    right: 312px;
    width: 127px;
    height: 127px;
  }
`;

export const Clouds = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(${clouds});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  width: 100%;
  height: 100%;
  @media ${p => p.theme.media.desktop} {
    top: 101px;
  }
`;

export const Sun = styled.div`
  @media ${p => p.theme.media.desktop} {
    position: absolute;
    z-index: 4;
    top: 0;
    right: 0;
    background-image: url(${ellipse});
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    width: 87px;
    height: 87px;
  }
  @media ${p => p.theme.media.desktop} {
    top: 21px;
    right: 660px;
  }
`;
