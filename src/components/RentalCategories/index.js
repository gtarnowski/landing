import React from 'react';
import { withRouter } from 'react-router-dom';
import Title from '../Title';
import NotFound from '../NotFound';
import { categories } from '../../content';
import './index.css';

const RentalCategories = ({ location: { pathname } }) => {
  const { name, content: ContentComponent } = categories.find(({ url }) => url === pathname) || {};
  if (!name) {
    return <NotFound />;
  }

  return (
    <div className="RentalCategories">
      <div className="title">
        <Title title={`${name} for Rent`} />
        <h2>View Tankmor's Available Inventory</h2>
        <div className="content-wrapper">
          {ContentComponent && (
            <ContentComponent />
          )}
        </div>
      </div>
    </div>
  );
};


export default withRouter(RentalCategories);
