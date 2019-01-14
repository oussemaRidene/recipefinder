import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

class FavoriteRecipieList extends Component {

  render() {
    return (
      <div>
      <h4 className="link"><Link to='/'>Home</Link></h4>
        <h4>FAVORITE RECIPES:</h4>
        {
          this.props.favoriteRecepies.map((recipe, index) => {
            return (
              <RecipeItem
                key={index}
                recipe={recipe}
                favoriteButton={false}
             />
            )
          })
        }
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    favoriteRecepies: state.favoriteRecepies
  }
}

export default connect(mapStateToProps, null)(FavoriteRecipieList);
