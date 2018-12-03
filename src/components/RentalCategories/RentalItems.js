import React from "react";
import { Query } from "react-apollo";
import listingQuery from "../../api/listingQuery";
import content from "../../content";
import get from "lodash/get";
import RentalListItem from "./RentalListItem";

const RentalItems = ({ category }) => {
  const variables = {
    company: content.companyId,
    filters: [],
    page: 1,
    sorting: "PRICE_ASC",
    category
  };
  return (
    <div className="RentalItems">
      <Query query={listingQuery} variables={variables}>
        {props => <ListingWrapper {...props} />}
      </Query>
    </div>
  );
};

const ListingWrapper = ({ data, loading }) => {
  const listings = get(data, "listings.listings");
  if (loading) return "Loading......";
  if (listings.length === 0) return "Sorry, Inventory is empty";

  return listings.map((listing, key) => (
    <RentalListItem {...listing} key={key} />
  ));
};

export default RentalItems;
