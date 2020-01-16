import axios from 'axios';

const initState = {
  color: 'red',
  name: 'Michel',
  specialtys: ['Bottier', 'Modiste', 'Bijoutier'],
  theme: true,
  data:[
    {
    "id": 13,
    "entreprise_nom": " Maxime urvoy Bijoutier ",
    "nom_artisan": "Urvoy",
    "prenom_artisan": "maxime",
    "site_internet": "www.maximeurvoybijoutier.com",
    "numero": 43,
    "adresse": "rue jean baptistes hamon",
    "photo_url1": null,
    "photo_url2": null,
    "photo_url3": null,
    "ville": "nantes",
    "metier_id": 1,
    "prestation_id": 1
    },
    {
    "id": 14,
    "entreprise_nom": "un mec",
    "nom_artisan": "Michel",
    "prenom_artisan": "Michel",
    "site_internet": "www.michel.com",
    "numero": 34,
    "adresse": "boulevard de la republique",
    "photo_url1": null,
    "photo_url2": null,
    "photo_url3": null,
    "ville": "nantes",
    "metier_id": 2,
    "prestation_id": 1
    }]
};

// const getArtisans = async () => {
//   let data;
//   await axios.get('http://localhost:8000/artisans')
//   .then(response => { data = response.data })
//   return data
// }

const RootReducer = (state = initState, action) => {
  switch (action.type) {

    case "CHANGENAME":
      console.log(state)
      return { ...state, name: action.payload }
      console.log(state)
    case "CHANGETHEME":
      return { ...state, theme: !state.theme }
    case "INITIALYSE":
      return {...state, data: action.payload}
    default:
      return state;
  }
}

export default RootReducer;