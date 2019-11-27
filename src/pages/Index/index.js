import React, { Component } from 'react';

import './styles.css';
import api from '../../services/api';

export default class Index extends Component {
  state = {
    heroes: []
  };

  componentDidMount() {
    this.loadHeroes();
  }

  async loadHeroes() {
    
    let response = await api.get('/all.json');

    this.setState({
      heroes: response.data
    });
  }

  render() {
    return (
      <>
      <header className="header">
        <h3>SUPER HERO APP</h3>
      </header>
      <div className="container">
        <input 
          type="text" className="search-field"
          placeholder="Digite o nome do personagem"
        />
        <div className="card-container">
          {this.state.heroes.map(hero => (
            <div key={hero.id} className="card">
              <img src={hero.images.sm} alt="hero-img"/>
              <div>
                <h2 className="title">{hero.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
}
