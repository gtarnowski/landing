import React from 'react'
import { Link } from 'react-router-dom';
// import React, {Component} from 'react'
import './index.css'

const DropDownMenu = ({ items }) => {
  return (
    <div className="DropDownMenu">
      {items.map(({ name, url }) => (
        <Link to={url} key={url}>
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

export default DropDownMenu
