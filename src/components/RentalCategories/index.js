import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Title from '../Title';
import NotFound from '../NotFound';
import { categories } from '../../content';
import './index.css';
import RentalItems from './RentalItems';

const RentalCategories = ({ location: { pathname } }) => {
  const { name, content: ContentComponent, absoluteUrl, icon, id } =
    categories.find(({ url }) => url === pathname) || {};
  const alternativeUrl = 'https://lead.eqipment/company/tankmor';

  if (!name) {
    return <NotFound />;
  }

  return (
    <div className="RentalCategories">
      <div className="title">
        <FontAwesomeIcon icon={icon} className="icon" />
        <Title title={`${name} for Rent`} />
        <a href={absoluteUrl || alternativeUrl} target="_blank">
          <h2>View Tankmor&apos;s Available Inventory</h2>
        </a>
        <RentalItems category={id} />
        <div className="content-wrapper">{ContentComponent && <ContentComponent />}</div>
      </div>
    </div>
  );
};

RentalCategories.propTypes = {
  location: PropTypes.object,
};

export default withRouter(RentalCategories);
