import React, {Fragment, Component} from 'react';
import debounce from 'lodash/debounce'
import SectionProvider from './SectionProvider';
import Map from './Map';
import content from '../content/index';

class Main extends Component {


  render() {
    return (
      <Fragment>
        {content.menuItems.map(menuComponent => (
          <SectionProvider {...menuComponent} key={menuComponent.name} name={menuComponent.name.replace(/ /g, '')}/>
        ))}
        <Map />
      </Fragment>
    );
  }
}

export default Main;
