class App extends React.Component {
  render() {
    return (
      <ReactBootstrap.Jumbotron>
        <h1>Welcome to Univity!</h1>
        <CategoryList />
      </ReactBootstrap.Jumbotron>
    );
  }
}

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch("/api/categories")
      .then(res => res.json())
      .then(result => {
        this.setState({
          categories: result
        });
      })
  }

  render() {
    return (
      <ul>
        {this.state.categories.map(category => (
          <li key={category}>
            {category}
          </li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
