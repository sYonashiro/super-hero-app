import React, { Component } from 'react';

import './styles.css';
import api from '../../services/api';

export default class Index extends Component {
  state = {
    heroes: [],
    filteredHeroes: []
  };

  componentDidMount() {
    this.loadHeroes();
  }

  async loadHeroes() {
    
    let response = await api.get('/all.json');

    this.setState({
      heroes: response.data,
      filteredHeroes: response.data
    });
  }

  heroExists(name, filter) {
    const lowerCaseName = name.toLowerCase();
    const lowerCaseFilter = filter.toLowerCase();

    return lowerCaseName.includes(lowerCaseFilter);
  }

  handleChange = (event) => {
    const filter = event.target.value;

    const filteredHeroes = this.state.heroes.filter(hero => this.heroExists(hero.name, filter));

    this.setState({
      ...this.state,
      filteredHeroes: filteredHeroes
    });
  }

  render() {
    return (
      <>
      <header className="header">
        <h3>SUPER HERO APP</h3>
      </header>
      <div className="container">
        <div className="input-container">
          <input 
            type="text" className="search-field"
            placeholder="Digite o nome do personagem"
            onChange={this.handleChange}
          />
        </div>
        <div className="card-container">
          {this.state.filteredHeroes.map(hero => (
            <div key={hero.id} className="card">
              <img src={hero.images.sm} alt="hero-img" className="card-img"/>
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
