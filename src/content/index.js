import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Rentals from '../components/Rentals';
import Contact from '../components/Contact';

export default {
  companyName: 'Tankmor',
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
    phone: '+1 (832) 900 4246',
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
