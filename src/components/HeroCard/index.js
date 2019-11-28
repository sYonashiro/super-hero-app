import React from 'react';
import { Card } from './styles';

export default function HeroCard(props) {
  return (
    <Card key={props.hero.id}>
      <img src={props.hero.images.sm} alt="hero-img" />
      <div>
        <h2>{props.hero.name}</h2>
        <h4>
          {props.hero.biography.fullName ? props.hero.biography.fullName : props.hero.name}
        </h4>
        <h5>{props.hero.biography.publisher}</h5>
      </div>
    </Card>
  );
}
