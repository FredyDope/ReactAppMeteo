import React from 'react';
//ajout des className pour le css
class Title extends React.Component {
  render() {
    return (
      <div>
      	<h2 className='title-container__title'>Weather Finder</h2>
      		<h3 className='title-container__subtitle'>Find out Temperatures...</h3> 
      </div>
    );
  }
}
export default Title;
