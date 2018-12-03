import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Title from '../Title';
import NotFound from '../NotFound';
import { categories } from '../../content';
import './index.css';
import RentalItems from '../RentalCategories/RentalItems'

const RentalCategories = ({ location: { pathname } }) => {
  const { name, content: ContentComponent, absoluteUrl, thumbnail, icon, id } = categories.find(({ url }) => url === pathname) || {};
  const alternativeUrl = 'https://lead.eqipment/company/tankmor';
  const onRedirectToLeadEquipment = (url) => {
    this.props.history.push(url);
  };

  if (!name) {
    return <NotFound />;
  }

  return (
    <div className="RentalCategories">
      <div className="title">
        <FontAwesomeIcon icon={icon} className="icon"/>
        <Title title={`${name} for Rent`} />
        <a href={absoluteUrl || alternativeUrl} target="_blank">
          <h2>View Tankmor's Available Inventory</h2>
        </a>
        <RentalItems category={id} />
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
