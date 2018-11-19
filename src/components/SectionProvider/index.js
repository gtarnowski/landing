import React from 'react';

const SectionProvider = ({ component: Component, name, url }) => (
  <div className="SectionProvider">
    <div id={url}>
      <Component name={name} />
    </div>
  </div>
);

export default SectionProvider;
