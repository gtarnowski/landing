import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Rentals from '../components/Rentals';
import Contact from '../components/Contact';

import { FuelTrailersContent } from './categoryContent';

export const categories = [
  {
    name: 'Chemical Trailers',
    url: '/rentals/chemical-trailers/',
  },
  { name: 'Food Grade Trailers',
    url: '/rentals/food-grade-trailers/',
  },
  {
    name: 'Industrial Gas Trailers',
    url: '/rentals/industrial-gas-trailers/',
  },
  {
    name: 'Fuel Trailers',
    url: '/rentals/gasoline-trailers/',
    content: FuelTrailersContent,
  },
  {
    name: 'Non Code Trailers',
    url: '/rentals/non-code-trailers/',
  },
];

export default {
  companyName: 'Tankmor',
  companyHeader: 'Fuel & Gasoline Trailers for Rent',
  companyDescription: 'Some description about company',
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
      url: 'home',
      className: 'Header',
      component: Header,
    },
    {
      name: 'About Us',
      url: 'about',
      component: AboutUs,
    },
    {
      name: 'Rentals',
      url: 'rentals',
      component: Rentals,
      children: categories,
    },
    {
      name: 'Contact',
      url: 'contact',
      component: Contact,
    },
  ],
  categoryTiles: categories.map(({ name }) => ({ name })),
};
