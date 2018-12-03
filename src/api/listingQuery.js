import gql from 'graphql-tag'

export default gql`
  query listings ($company: ID $category: ID!, $filters: [FilterInput], $sorting: ListingSorting, $page: Int = 1) {
    listings(page: {page: $page limit: 25} query: {
      company: $company
      category: $category
      filters: $filters
      sorting: $sorting
    }) {
      pagination {
        total
        page
        pages
      }
      listings {
        category {
          name
        }
        id
        title
        url (format: COMPANY_RELATIVE)
        salePrice
        rentPrice
        locationName
        fields(limit: 4) {
          name
          value
        }
        description
        leadPhoto (size: SRP) {
          url
        }
        photosCount
        company {
          id
          logo
          name
        }
        dealer {
          id
          phone
          name
          website
        }
        featured
        state: field(name: "State / Providence") {
          value
        }
        city: field(name: "City") {
          value
        }
      }
    }
  }
`
