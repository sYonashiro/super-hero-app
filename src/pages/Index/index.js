import React, { Component } from 'react';

import api from '../../services/api';
import { Container, InputContainer, CardContainer } from './styles';
import HeroCard from '../../components/HeroCard';
import SearchInput from '../../components/SearchInput';

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
          <SearchInput onChange={this.handleChange} />
        </InputContainer>
        <CardContainer>
          {this.state.filteredHeroes.map(hero => (
            <HeroCard hero={hero} />
          ))}
        </CardContainer>
      </Container>
      </>
    );
  }
}
