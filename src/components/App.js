import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component{

    state={ images: []};
    // initialise an empty array as state
    onSearchSubmit= async  (term)=>{
      const response=await unsplash.get('https://api.unsplash.com/search/photos',{
        params:{ query:term }
      });

      this.setState({ images:response.data.results});

  }

    render(){
      return(
        <div className="ui container" style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          <ImageList images={this.state.images}/>
        </div>
      );
  }
}

export default App;
