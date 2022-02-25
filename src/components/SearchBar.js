import React, { Component } from 'react'

class SearchBar extends Component {
  state = {term : ''}

  onFormSubmit = event => {   // arrow function
    event.preventDefault();

    //this.props.onSubmit(this.state.term);

    console.log(this.state.term);
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label className="ui teal label"><h4>Search Here</h4></label>
            <div className="ui action input">
              <input 
                type="text" 
                value={this.state.term}
                placeholder="Search..."
                onChange={e=>this.setState({term:e.target.value})}
              />
              <button className="ui green button">Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;