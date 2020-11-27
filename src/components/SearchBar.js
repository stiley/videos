import React from 'react';


class SearchBar extends React.Component{
    state = {term: ''};

    onInputChange = (event) =>{
       this.setState({term: event.target.value})
       console.log(`on Input changed - ${ event.target.value}`);
    }
//AIzaSyDm5s5_ZfSJjTybEAEs0CMG99JEq4RhUBk
    onFormSubmit = (event) =>{
       event.preventDefault();
       // TODO make sure we call callback from parent component
       this.props.onFormSubmit(this.state.term); // tells our component what the search term is
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div>
                        <label>Video Search</label>
                        <input type="text"
                              onChange={this.onInputChange}
                              value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar