const initState = {
  color: 'red',
  name: 'Michel',
  specialtys: ['Bottier', 'Modiste', 'Bijoutier'],
  theme: true,
  data: [
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
      "prestation_id": 1,
      avis: null
    }],
  dataMetier: [],
  metier_idChoose: 0,
  dataAvis: []
};

const RootReducer = (state = initState, action) => {
  switch (action.type) {

    case "CHANGENAME":
      return { ...state, name: action.payload }
    case "CHANGETHEME":
      return { ...state, theme: !state.theme }
    case "INITIALYSE":
      return { ...state, data: action.payload }
    case "INITIALYSEMETIER":
      return { ...state, dataMetier: action.payload }
    case "METIERIDCHOOSE":
      return { ...state, metier_idChoose: action.payload }
    case "INITIALYSEAVIS":
      return { ...state, dataAvis: action.payload }
    default:
      return state;
  }
}

export default RootReducer;