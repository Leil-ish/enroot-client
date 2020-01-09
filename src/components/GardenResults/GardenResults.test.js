import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import GardenResults from './GardenResults';

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
    {
      id: 10,
      scientific_name: "Collema undulatum Laurer ex Flotow",
      common_name: "Undulate Jelly Lichen",
      lifespan: "aliquam non",
      growth_rate: "turpis",
      growth_period: "auctor",
      temperature_minimum: "1",
      shade_tolerance: "in",
      precipitation_minimum: "3",
      precipitation_maximum: "15",
      resprout_ability: "sapien",
      family_common_name: "nibh in",
      duration: "amet",
      drought_tolerance: "tellus semper",
      frost_free_days_minimum: "11",
      moisture_use: "libero",
      user_id: 2,
      seedling_vigor: "consequat",
      flower_color: "Yellow",
      foliage_color: "Indigo"
    }
  ]
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <GardenResults {...props}/>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});