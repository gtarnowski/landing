import React from 'react';
import SectionProvider from './SectionProvider';
import menuComponents from './sections';

const Main = () => menuComponents.map(menuComponent => (
  <SectionProvider {...menuComponent} key={menuComponent.name} />
));


export default Main;
