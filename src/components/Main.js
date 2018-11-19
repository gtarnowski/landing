import React from 'react';
import SectionProvider from './SectionProvider';
import content from '../content/index';

const Main = () => content.menuItems.map(menuComponent => (
  <SectionProvider {...menuComponent} key={menuComponent.name} />
));


export default Main;
