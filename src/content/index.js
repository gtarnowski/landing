import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Rentals from '../components/Rentals';
import Contact from '../components/Contact';

export default {
  companyName: 'Tankmor',
  menuItems: [
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
  ],
  categoryTiles: [
    {
      name: 'Chemical Trailers',
    },
    {
      name: 'Gasoline Trailers',
    },
    {
      name: 'Industrial Gas Trailers',
    },
    {
      name: 'Food Grade Trailers',
    },
    {
      name: 'Non Code Trailers',
    },
  ],

};
