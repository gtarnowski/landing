import React from 'react'
import { Link, withRouter } from 'react-router-dom';
// import React, {Component} from 'react'
import './index.css'

const DropDownMenu = ({ items, location: { pathname } }) => {
  console.log('pathname', pathname)
  return (
    <div className="DropDownMenu">
      {items.map(({ name, url }) => (
        <Link to={url} key={url} className={url === pathname && 'active'}>
          <li>{name}</li>
        </Link>
      ))}
    </div>
  )
}

// class Xxxx extends Component {
//
//   render() {
//     return (
//       <div>
//
//       </div>
//     )
//   }
// }

export default withRouter(DropDownMenu)
