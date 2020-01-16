import axios from 'axios';

const initState = {
  color: 'red',
  name: 'Michel',
  specialtys: ['Bottier', 'Modiste', 'Bijoutier'],
  theme: true,
  data:[]
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