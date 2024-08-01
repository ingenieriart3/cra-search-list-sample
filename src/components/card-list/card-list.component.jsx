import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';
export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

//  <div className='card-container' key={id}>
//           <img
//             alt={`monster ${name}`}
//             src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           />
//           {id}
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </div>
