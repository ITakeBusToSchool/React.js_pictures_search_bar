import React from 'react';

class SearchBar extends React.Component{
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
  // onInputClick(){
  //   console.log("input is onClink");
  // }
  state={term:''};


  onFormSubmit=event=>{
    //while you don't want the event refresh autimatically, event.preventDefault()
    //is necaessary for the event
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render(){
    return (
      <div className="ui segment">
        <form onSubmit={(event)=>this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
              <input
                  type='text'
                  value={this.state.term}
                  onChange={e=>this.setState(
                      {term:e.target.value}
                    )}
                  />
          </div>
        </form>
      </div>
    );
  };
};


export default SearchBar;
