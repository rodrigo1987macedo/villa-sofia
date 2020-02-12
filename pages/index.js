import React from 'react';
import {Hero} from '../components/Hero';
import MainWrapper from '../components/MainWrapper';
import {Services} from '../components/Services';
import {Gallery} from '../components/Gallery';

const services = {
  'Habitaciones confortables': [
    'Cuartos con cama sommier y TV LED. Mobiliario nuevo.',
    'bed',
  ],
  'Ambientes amplios': [
    'Sala de estar con cómodos sillones y comedor.',
    'couch',
  ],
  'Cocina moderna': [
    'Menúes especiales con nutricionista. Amplio espacio.',
    'food',
  ],
  'Espacios verdes': ['Cesped, plantas, flores. Luminocidad natural.', 'plant'],
};

const images = [
  'gallery6.jpeg',
  'gallery1.jpeg',
  'gallery2.jpeg',
  'gallery3.jpeg',
  'gallery4.jpeg',
  'gallery5.jpeg',
  'gallery6.jpeg',
  'gallery7.jpeg',
  'gallery8.jpeg',
  'gallery9.jpeg',
  'gallery10.jpeg',
  'gallery11.jpeg',
  'gallery12.jpeg',
  'gallery13.jpeg',
  'gallery14.jpeg',
  'gallery15.jpeg',
];

export default () => (
  <MainWrapper
    title="Villa Sofía - Residencial para adultos"
    description="Reseidencial para adultos">
    <Hero title="Villa Sofía" pretitle="Residencial" />
    <Services services={services} />
    <Gallery images={images} />
  </MainWrapper>
);
