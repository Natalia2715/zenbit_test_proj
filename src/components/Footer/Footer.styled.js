import styled from 'styled-components';
import smileRed from '../../images/red_smile1.png';
import smileGreen from '../../images/smile_green.png';
import smileYellow from '../../images/smile_yellow1.png';

export const FooterWrap = styled.footer`
  position: relative;
  z-index: 20;
  height: 100px;
  width: 100%;
  background-color: ${p => p.theme.colors.footer};
  bottom: 0;
  border: 1px solid #d8d8d8;
  @media ${p => p.theme.media.desktop} {
    height: 200px;
  }
`;

export const PinkSmile = styled.div`
  position: absolute;
  width: 180px;
  height: 119px;
  top: -22px;
  left: -10px;
  background-size: cover;
  background-position: top;
  background-origin: content-box;
  background-repeat: no-repeat;
  
  @media ${p => p.theme.media.tablet} {
    width: 135px;
    height: 135px;
    background-image: url(${smileRed});
    top: -12px;
    bottom: -32px;
    left: 20px;
    width: 160px;
    height: 114px;
  }
  @media ${p => p.theme.media.desktop} {
    top: -32px;
    bottom: -32px;
    left: 20px;
    width: 280px;
    height: 230px;
  }
`;

export const GreenSmile = styled.div`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${smileGreen});
  @media ${p => p.theme.media.desktop} {
    right: 128px;
    width: 78px;
    height: 97px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 45px;
  @media ${p => p.theme.media.desktop} {
    padding-top: 80px;
    padding-left: 343px;
    padding-right: 343px;
    justify-content: left;
  }
`;

export const SocialIconsLink = styled.a`
  margin-right: 6px;
  @media ${p => p.theme.media.desktop} {
    margin-right: 20px;
  }
`;

export const SocialIconsItem = styled.svg`
  width: 10px;
  height: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
  }
  @media ${p => p.theme.media.desktop} {
    width: 15px;
    height: 15px;
  }
`;

export const MiniYellow = styled.div`
  position: absolute;
  background-size: cover;
  background-position: left;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-image: url(${smileYellow});
  @media ${p => p.theme.media.desktop} {
    top: 65px;
    left:auto;
    right: 0;
    width: 100px;
    height: 128px;
  }
`;
