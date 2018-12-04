import faFlask from '@fortawesome/fontawesome-free-solid/faFlask';
import faUtensils from '@fortawesome/fontawesome-free-solid/faUtensils';
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs';
import faGasPump from '@fortawesome/fontawesome-free-solid/faGasPump';
import faBarcode from '@fortawesome/fontawesome-free-solid/faBarcode';
import Header from '../components/Header';
import Rentals from '../components/Rentals';
import Contact from '../components/Contact';

import trailer1 from './img/BkgvqJecT7.jpg';
import trailer2 from './img/BkgYy77iA7.jpg';
import trailer3 from './img/r1ePNCk5pX.jpg';
import trailer4 from './img/rylCo6yq6X.jpg';

import { FuelTrailersContent } from './categoryContent';

export const categories = [
  {
    name: 'Chemical Trailers',
    url: '/rentals/chemical-trailers/',
    absoluteUrl: 'https://lead.equipment/company/tankmor/4/49/299/trailers/tanker-trailers/chemical-trailers',
    thumbnail: trailer1,
    icon: faFlask,
    id: '299',
  },
  {
    name: 'Food Grade Trailers',
    url: '/rentals/food-grade-trailers/',
    absoluteUrl: 'https://lead.equipment/company/tankmor/4/49/301/trailers/tanker-trailers/food-grade-trailers',
    thumbnail: trailer2,
    icon: faUtensils,
    id: '301',
  },
  {
    name: 'Industrial Gas Trailers',
    url: '/rentals/industrial-gas-trailers/',
    absoluteUrl: 'https://lead.equipment/company/tankmor/4/49/304/trailers/tanker-trailers/industrial-gas-trailers',
    thumbnail: trailer3,
    icon: faCogs,
    id: '304',
  },
  {
    name: 'Fuel Trailers',
    url: '/rentals/gasoline-trailers/',
    content: FuelTrailersContent,
    absoluteUrl: 'https://lead.equipment/company/tankmor/4/49/303/trailers/tanker-trailers/gasoline-trailers',
    thumbnail: trailer4,
    icon: faGasPump,
    id: '303',
  },
  {
    name: 'Non Code Trailers',
    url: '/rentals/non-code-trailers/',
    absoluteUrl: null,
    thumbnail: trailer2,
    icon: faBarcode,
    id: '305',
  },
];

export default {
  companyId: '165',
  companyName: 'Tankmor',
  companyHeader: 'Fuel & Gasoline Trailers for Rent',
  companyDescription: 'Liquid Tank Rental',
  companyDetails: {
    email: 'rentals@tankmor.com',
    address: '531 Sheldon Rd, Channelview, TX 77530',
    fullAddress: {
      zip: '77530',
      state: 'TX',
      street: '531 Sheldon Rd',
      city: 'Channelview',
    },
    phone: '(832) 900 4246',
  },
  menuItems: [
    {
      name: 'Home',
      url: '/',
      className: 'Header',
      component: Header,
    },
    {
      name: 'Rentals',
      url: '/rentals',
      component: Rentals,
      children: categories,
    },
    {
      name: 'Contact',
      url: '/contact',
      component: Contact,
    },
  ],
  categoryTiles: categories.map(({ name }) => ({ name })),
};
