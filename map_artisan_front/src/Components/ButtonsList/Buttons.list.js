import React from 'react';
import Button from '../Button/Button';







class ButtonsList extends React.Component {
  constructor(){
  super()
  this.state = {
  specialtys: ['Bottier', 'Modiste', 'Bijoutier']
}}

render(){
  return(
  <>
    {this.state.specialtys.map(specialty => {
      return (
        <Button specialty={specialty} />)
    })}
  </>
)

}
}

export default ButtonsList;