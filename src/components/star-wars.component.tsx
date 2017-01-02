import * as React from 'react';
import 'whatwg-fetch';

type StarWarsComponentState = {
  items: Object[];
  data: Object[]
};

type StarWarsItem = {
  name: string
};

type StarWarsResponse = {
  results: StarWarsItem[]
};

const initialState = {
  items: [],
  data: []
};

class StarWarsComponent extends React.Component<{}, StarWarsComponentState> {

  constructor() {
    super();
    this.state = initialState;
  }

  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
      .then((response: any) => response.json())
      .then((data: StarWarsResponse) => this.setState({
        items: data.results,
        data: data.results
      }));
  }

  onSearch(value: string) {
    const items = this.state.data
      .filter((item: StarWarsItem) => {
        return item.name.toLowerCase().includes(value.toLowerCase())
      });

    this.setState({
      ...this.state,
      items
    })
  }

  render() {

    const items = this.state.items;

    return (
      <div>
        <h1>StarWars Component</h1>
        <SearchComponent update={this.onSearch.bind(this)}/>
        <ul>
          { items.map((item: StarWarsItem, index: number) =>
            <PersonComponent key={index} person={item}/>) }
        </ul>
      </div>
    )
  }
}

type PersonComponentProps = {
  person: StarWarsItem
};

const PersonComponent = (props: PersonComponentProps) => <li>{props.person.name}</li>;

type SearchComponentProps = {
  update: (value: string) => void;
};

class SearchComponent extends React.Component<SearchComponentProps, {}> {

  onChangeHandler(e: Event) {
    const inputElement = e.target as HTMLInputElement;

    this.props.update(inputElement.value);
  }

  render() {
    return <input type="text" onChange={this.onChangeHandler.bind(this)} placeholder="Search"/>
  }
}

export default StarWarsComponent;