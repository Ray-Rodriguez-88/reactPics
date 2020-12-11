import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
     console.log('Input was Clicked')
  }
  render() {
    return (
      <div className="ui segment"> 
        <form className="ui form">
          <div className="field">
            <label> Image Search </label>
            <input type="Text" onChange={this.onInputChange} onClick={this.onInputClick}/>
          </div>
        </form>
     </div>
    );
  };
};

export default SearchBar;