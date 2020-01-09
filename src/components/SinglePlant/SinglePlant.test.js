import React from 'react';
import ReactDOM from 'react-dom';
import SinglePlant from './SinglePlant';

const props = {
  plants: [
    {
      id: 15,
      scientific_name: "Pyrenopsis compacta Willey",
      common_name: "Compact Pyrenopsis Lichen",
      lifespan: "in",
      growth_rate: "pellentesque viverra",
      growth_period: "sit",
      temperature_minimum: "35",
      shade_tolerance: "sem fusce",
      precipitation_minimum: "3",
      precipitation_maximum: "1",
      resprout_ability: "quis",
      family_common_name: "elementum",
      duration: "ut volutpat",
      drought_tolerance: "molestie",
      frost_free_days_minimum: "63",
      moisture_use: "nibh fusce",
      user_id: 2,
      seedling_vigor: "orci",
      flower_color: "Teal",
      foliage_color: "Purple"
    },
  ]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SinglePlant {...props}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});