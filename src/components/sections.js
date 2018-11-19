// Components
import Header from './Header';
import AboutUs from './AboutUs';
import Rentals from './Rentals';
import Contact from './Contact';

export default [
  {
    name: 'Home',
    url: 'home',
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
  },
  {
    name: 'Contact',
    url: 'contact',
    component: Contact,
  },
];
