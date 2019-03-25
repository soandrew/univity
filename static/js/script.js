const RAINBOW = [
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange"
]

class App extends React.Component {
  render() {
    return (
      <Masthead />
    );
  }
}

function Masthead() {
  return (
    <header class="masthead vh-100">
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center text-center">
          <div class="col-12 align-self-end">
            <h1>Univity</h1>
            <p class="lead">Get involved with causes that matter to you</p>
          </div>
          <div class="col-12 align-self-start">
            <CategoryList />
          </div>
        </div>
      </div>
    </header>
  )
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
      <ul class="categories__list">
        {this.state.categories.map((category, i) => (
          <li key={category}
              class={`categories__list__item categories__list__item--${RAINBOW[i % RAINBOW.length]}`}>
            <a href="#" class="categories__list__item__link">{category}</a>
          </li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
