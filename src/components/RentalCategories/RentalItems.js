import React from 'react';
import { Query } from 'react-apollo'
import listingQuery from '../../api/listingQuery'
import content from '../../content'

const variables = {
  company: content.companyId,
  filters: [],
  page: 1,
  sorting: "PRICE_ASC"
}

const RentalItems = ({ category }) => {
  return (
    <div className="RentalItems">
      <Query
        query={listingQuery}
        variables={{ ...variables, category }}
      >
        {({ loading, data }) => {
          console.log(data)
          if (loading) return 'Loading......'
          return data.listings.listings.map((listing, key) => <RentalItem {...listing} key={key} />)
        }}
      </Query>
    </div>
  )
}

const RentalItem = ({ title, leadPhoto, url }) => (
  <div className="RentalItem" onClick={() => window.open(`https://lead.equipment${url}`, '_blank')}>
      <img src={leadPhoto.url} alt=""/>
      <h4>{title}</h4>
  </div>
)

export default RentalItems
