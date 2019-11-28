import React, { Component } from 'react';

import './styles.css';
import api from '../../services/api';
import { Container, InputContainer, SearchInput, CardContainer, Card } from './styles';

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
      <Container>
        <InputContainer>
          <SearchInput
            placeholder="Digite o nome do personagem"
            onChange={this.handleChange}
          />
        </InputContainer>
        <CardContainer>
          {this.state.filteredHeroes.map(hero => (
            <Card key={hero.id}>
              <img src={hero.images.sm} alt="hero-img" />
              <div>
                <h2>{hero.name}</h2>
                <h4>{hero.biography.fullName ? hero.biography.fullName : hero.name}</h4>
                <h5>{hero.biography.publisher}</h5>
              </div>
            </Card>
          ))}
        </CardContainer>
      </Container>
      </>
    );
  }
}
