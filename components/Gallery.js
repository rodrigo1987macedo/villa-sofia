import React, {useState} from 'react';
import styled from 'styled-components';
import {Section} from '../components/Section';
import LazyLoad from 'react-lazyload';

const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 340px;
  @media (min-width: 1120px) {
    flex: 1;
  }
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px 0 0 0;
  left: ${props => props.w + '00vw'};
  transform: ${props => 'translate(' + props.translation + 'vw)'};
  transition: transform 0.5s;
  > img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 10px;
    border-radius: 8px;
    border: 1px solid grey;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    @media (min-width: 1120px) {
      height: 100%;
      align-items: flex-end;
    }
  }
`;

const Arrow = styled.div`
  display: ${props =>
    props.translation === -props.maxImages * 100 + 100 && !props.inverse
      ? 'none'
      : props.translation === 0 && props.inverse
      ? 'none'
      : 'block'};
  position: absolute;
  top: 30%;
  left: ${props => props.inverse && '0'};
  right: ${props => !props.inverse && '0'};
  transform: ${props => props.inverse && 'rotate(180deg)'};
  cursor: pointer;
  width: 30px;
  > img {
    width: 60px;
  }
  @media (min-width: 515px) {
    top: 50%;
  }
`;

const DotsWrapper = styled.div`
  display: none;
  @media (min-width: 550px) {
    position: absolute;
    bottom: 30px;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const Dot = styled.div`
  display: flex;
  margin: 0 10px;
  background: white;
  border-radius: 100%;
  width: 5px;
  height: 5px;
  transform: ${props => props.currentImg && 'scale(2.2)'};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  :hover {
    transform: ${props => !props.currentImg && 'scale(1.5)'};
  }
  @media (min-width: 321px) {
    width: 10px;
    height: 10px;
  }
`;

export function Gallery(props) {
  const [translation, setTranslation] = useState(0);

  const translationHandler = (t, direct) => {
    let newTranslation = translation + t;
    if (direct) setTranslation(t);
    if (!direct) setTranslation(newTranslation);
  };

  return (
    <Section
      title="Galería"
      subtitle="Para sentirse bien como si fuera su propio hogar con atención exclusiva">
      <GalleryWrapper>
        <LazyLoad offset={100}>
          <Carousel>
            {props.images.map((item, index) => (
              <ImgContainer key={index} w={index} translation={translation}>
                <img src={('/public/', item)} alt={item} />
              </ImgContainer>
            ))}
            <DotsWrapper>
              {props.images.map((item, index) => (
                <Dot
                  key={index}
                  onClick={() => translationHandler(index * -100, true)}
                  currentImg={-translation / 100 === index}
                />
              ))}
            </DotsWrapper>
          </Carousel>
        </LazyLoad>
        <Arrow
          onClick={() => translationHandler(100, false)}
          translation={translation}
          maxImages={props.images.length}
          inverse>
          <img src="arrow.png" alt="atrás" />
        </Arrow>
        <Arrow
          onClick={() => translationHandler(-100, false)}
          translation={translation}
          maxImages={props.images.length}>
          <img src="arrow.png" alt="adelante" />
        </Arrow>
      </GalleryWrapper>
    </Section>
  );
}
