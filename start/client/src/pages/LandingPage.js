import React from 'react';
import MainHero from '../components/MainHero/MainHero';
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import { useQuery, gql } from '@apollo/client';

const ANIMALS_QUERY = gql`
  {
    animals {
      id
      title
      price
      slug
      image
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(ANIMALS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
    </div>
  );
}

export default LandingPage;
