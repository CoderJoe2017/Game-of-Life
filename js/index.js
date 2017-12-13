var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.clear();
var _ReactBootstrap = ReactBootstrap,
    Button = _ReactBootstrap.Button,
    ButtonToolbar = _ReactBootstrap.ButtonToolbar;

var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title(props) {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props));
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      var titleClass = 'text-center heading-text-one';
      var codedByClass = 'text-center heading-text-two';
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: titleClass },
          this.props.title
        ),
        React.createElement(
          'h5',
          { className: codedByClass },
          'Inspired by John Conway and Andy Lindsay'
        )
      );
    }
  }]);

  return Title;
}(React.Component);

Title.propTypes = {
  title: React.PropTypes.string
};
Title.defaultProps = {
  title: "Title"
};

var GameboardControls = function (_React$Component2) {
  _inherits(GameboardControls, _React$Component2);

  function GameboardControls(props) {
    _classCallCheck(this, GameboardControls);

    return _possibleConstructorReturn(this, (GameboardControls.__proto__ || Object.getPrototypeOf(GameboardControls)).call(this, props));
  }

  _createClass(GameboardControls, [{
    key: 'render',
    value: function render() {
      var startButtonText = "Start";
      if (this.props.running) {
        startButtonText = "Pause";
      }
      return React.createElement(
        'div',
        null,
        React.createElement(
          ButtonToolbar,
          { className: 'text-center' },
          React.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-3' },
            React.createElement(
              Button,
              { onClick: this.props.onClick.bind(this, 25), className: 'gameboard-button', bsStyle: 'primary' },
              '25 x 18'
            )
          ),
          React.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-3' },
            React.createElement(
              Button,
              { onClick: this.props.onClick.bind(this, 50), className: 'gameboard-button', bsStyle: 'primary' },
              '50 x 35'
            )
          ),
          React.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-3' },
            React.createElement(
              Button,
              { onClick: this.props.onClick.bind(this, 100), className: 'gameboard-button', bsStyle: 'primary' },
              '100 x 70'
            )
          ),
          React.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-3' },
            React.createElement(
              Button,
              { onClick: this.props.onClick.bind(this, 200), className: 'gameboard-button', bsStyle: 'primary' },
              '200 x 105'
            )
          )
        ),
        React.createElement(
          ButtonToolbar,
          { className: 'text-center' },
          React.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-3' },
            React.createElement(
              Button,
              { onClick: this.props.pauseGame, className: 'gameboard-button', bsStyle: 'primary' },
              startButtonText
            )
          ),
          React.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-3' },
            React.createElement(
              Button,
              { onClick: this.props.clearGame, className: 'gameboard-button', bsStyle: 'primary' },
              'Clear'
            )
          )
        )
      );
    }
  }]);

  return GameboardControls;
}(React.Component);

var GameboardFeedback = function (_React$Component3) {
  _inherits(GameboardFeedback, _React$Component3);

  function GameboardFeedback(props) {
    _classCallCheck(this, GameboardFeedback);

    return _possibleConstructorReturn(this, (GameboardFeedback.__proto__ || Object.getPrototypeOf(GameboardFeedback)).call(this, props));
  }

  _createClass(GameboardFeedback, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'text-center col-xs-12 col-sm-12 col-md-12 col-lg-12' },
        React.createElement(
          'div',
          { className: 'col-xs-6' },
          React.createElement(
            'h5',
            null,
            'Population: ',
            this.props.population
          )
        ),
        React.createElement(
          'div',
          { className: 'col-xs-6' },
          React.createElement(
            'h5',
            null,
            'Generations: ',
            this.props.generations
          )
        )
      );
    }
  }]);

  return GameboardFeedback;
}(React.Component);

var Gameboard = function (_React$Component4) {
  _inherits(Gameboard, _React$Component4);

  function Gameboard(props) {
    _classCallCheck(this, Gameboard);

    return _possibleConstructorReturn(this, (Gameboard.__proto__ || Object.getPrototypeOf(Gameboard)).call(this, props));
  }

  _createClass(Gameboard, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      var classes = "";
      var cells = _.chunk(this.props.gameboard, this.props.width);
      if (this.props.width <= 25) {
        classes = "cell twenty-five-cell";
      } else if (this.props.width <= 50) {
        classes = "cell fifty-cell";
      } else if (this.props.width <= 100) {
        classes = "cell hundred-cell";
      } else {
        classes = "cell two-hundred-cell";
      }
      return React.createElement(
        'div',
        null,
        cells.map(function (row, id) {
          return React.createElement(
            'p',
            { key: id },
            row.map(function (cell, id) {
              return React.createElement('span', { onClick: _this5.props.onClick.bind(_this5, cell.id), key: id, className: classes + ' ' + cell.myClass });
            })
          );
        })
      );
    }
  }]);

  return Gameboard;
}(React.Component);

var generateNeighbours = function generateNeighbours(id, width, height) {
  var neighbourArray = [];
  if (id % width === 0) {
    if (id - 1 < 0) {
      neighbourArray.push(width * height - 1);
    } else {
      neighbourArray.push(id - 1);
    }
  } else if (id - (width + 1) < 0) {
    neighbourArray.push(width * height + (id - (width + 1)));
  } else {
    neighbourArray.push(id - (width + 1));
  }
  if (id - width < 0) {
    neighbourArray.push(width * height + (id - width));
  } else {
    neighbourArray.push(id - width);
  }
  if ((id + 1) % width === 0) {
    if (id - (width * 2 - 1) < 0) {
      neighbourArray.push(width * height + (id - (width * 2 - 1)));
    } else {
      neighbourArray.push(id - (width * 2 - 1));
    }
  } else if (id - (width - 1) < 0) {
    neighbourArray.push(width * height + (id - (width - 1)));
  } else {
    neighbourArray.push(id - (width - 1));
  }
  if (id % width === 0) {
    neighbourArray.push(id + (width - 1));
  } else {
    neighbourArray.push(id - 1);
  }
  if ((id + 1) % width === 0) {
    neighbourArray.push(id - (width - 1));
  } else {
    neighbourArray.push(id + 1);
  }
  if (id % width === 0) {
    if (id + width * 2 > width * height) {
      neighbourArray.push(id + (width * 2 - 1) - width * height);
    } else {
      neighbourArray.push(id + (width * 2 - 1));
    }
  } else if (id + (width - 1) >= width * height) {
    neighbourArray.push(id + (width - 1) - width * height);
  } else {
    neighbourArray.push(id + (width - 1));
  }
  if (id + width >= width * height) {
    neighbourArray.push(id + width - width * height);
  } else {
    neighbourArray.push(id + width);
  }
  if ((id + 1) % width === 0) {
    if (id + (width + 1) >= width * height) {
      neighbourArray.push(width * height - (id + 1));
    } else {
      neighbourArray.push(id + 1);
    }
  } else if (id + (width + 1) > width * height) {
    neighbourArray.push(id + (width + 1) - width * height);
  } else {
    neighbourArray.push(id + (width + 1));
  }
  return neighbourArray;
};

var GameboardContainer = function (_React$Component5) {
  _inherits(GameboardContainer, _React$Component5);

  function GameboardContainer(props) {
    _classCallCheck(this, GameboardContainer);

    var _this6 = _possibleConstructorReturn(this, (GameboardContainer.__proto__ || Object.getPrototypeOf(GameboardContainer)).call(this, props));

    _this6.state = {
      width: 25,
      height: 18,
      density: 0.3,
      tempo: 0.5,
      generations: 0,
      gameboard: [],
      population: 0,
      prevPopulation: 0,
      running: false
    };
    return _this6;
  }

  _createClass(GameboardContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.generateBoard();
      this.setState({
        intervalId: setInterval(this.refreshBoard.bind(this), 500 * this.state.tempo),
        running: true
      });
    }
  }, {
    key: 'changeSize',
    value: function changeSize(width) {
      var height = 0;
      switch (width) {
        case 25:
          height = 18;
          break;
        case 50:
          height = 35;
          break;
        case 100:
          height = 70;
          break;
        case 200:
          height = 105;
          break;
      }
      this.state.width = width;
      this.state.height = height;
      this.state.generations = 0;
      this.generateBoard();
    }
  }, {
    key: 'changeAlive',
    value: function changeAlive(id) {
      this.state.gameboard[id].alive = !this.state.gameboard[id].alive;
      if (this.state.gameboard[id].alive === true) {
        this.state.gameboard[id].myClass = "newborn";
      } else {
        this.state.gameboard[id].myClass = "dead";
      }
      this.forceUpdate();
    }
  }, {
    key: 'pauseGame',
    value: function pauseGame() {
      if (this.state.running) {
        clearInterval(this.state.intervalId);
      } else {
        this.setState({
          intervalId: setInterval(this.refreshBoard.bind(this), 500 * this.state.tempo)
        });
      }
      this.setState({
        running: !this.state.running
      });
    }
  }, {
    key: 'clearGame',
    value: function clearGame() {
      if (this.state.running) {
        clearInterval(this.state.intervalId);
      }
      this.setState({
        running: false,
        generations: 0,
        population: 0
      });
      for (var i = 0; i < this.state.gameboard.length; i++) {
        this.state.gameboard[i].alive = false;
        this.state.gameboard[i].myClass = "dead";
        this.state.gameboard[i].nextState = false;
      }
      this.updateBoardState();
    }
  }, {
    key: 'generateBoard',
    value: function generateBoard() {
      this.state.gameboard.length = 0;
      var cell = {};
      for (var i = 0; i < this.state.width * this.state.height; i++) {
        cell = {
          id: i,
          name: "cell" + i,
          alive: Math.random() < this.state.density ? true : false,
          neighbours: generateNeighbours(i, this.state.width, this.state.height),
          nextState: false,
          prevState: false
        };
        cell.myClass = cell.alive ? "newborn" : "dead";
        this.state.gameboard.push(cell);
      }
    }
  }, {
    key: 'countLiving',
    value: function countLiving() {
      var liveCount = 0;
      for (var i = 0; i < this.state.gameboard.length; i++) {
        if (this.state.gameboard[i].alive) {
          liveCount = liveCount + 1;
        }
      }
      return liveCount;
    }
  }, {
    key: 'countLiveNeighbours',
    value: function countLiveNeighbours(id) {
      var liveCount = 0;
      for (var i = 0; i < 8; i++) {
        if (this.state.gameboard[this.state.gameboard[id].neighbours[i]].alive === true) {
          liveCount = liveCount + 1;
        }
      }
      return liveCount;
    }
  }, {
    key: 'refreshBoard',
    value: function refreshBoard() {
      this.regenBoard();
      this.updateBoardState();
      this.setState({
        generations: this.state.generations + 1,
        population: this.countLiving()
      });
    }
  }, {
    key: 'updateBoardState',
    value: function updateBoardState() {
      for (var i = 0; i < this.state.gameboard.length; i++) {
        this.state.gameboard[i].prevState = this.state.gameboard[i].alive;
        this.state.gameboard[i].alive = this.state.gameboard[i].nextState;
      }
    }
  }, {
    key: 'regenBoard',
    value: function regenBoard() {
      for (var i = 0; i < this.state.gameboard.length; i++) {
        if (this.state.gameboard[i].alive) {
          if (this.countLiveNeighbours(i) < 2) {
            this.state.gameboard[i].nextState = false;
            this.state.gameboard[i].myClass = "dead";
          } else if (this.countLiveNeighbours(i) < 4) {
            this.state.gameboard[i].nextState = true;
            this.state.gameboard[i].myClass = "alive";
          } else {
            this.state.gameboard[i].nextState = false;
            this.state.gameboard[i].myClass = "dead";
          }
        } else {
          if (this.countLiveNeighbours(i) === 3) {
            this.state.gameboard[i].nextState = true;
            this.state.gameboard[i].myClass = "newborn";
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'gameboard rounded-corners' },
        React.createElement(GameboardFeedback, { generations: this.state.generations, population: this.state.population }),
        React.createElement(Gameboard, { gameboard: this.state.gameboard, onClick: this.changeAlive.bind(this), width: this.state.width }),
        React.createElement(GameboardControls, { onClick: this.changeSize.bind(this), pauseGame: this.pauseGame.bind(this), clearGame: this.clearGame.bind(this), running: this.state.running })
      );
    }
  }]);

  return GameboardContainer;
}(React.Component);

var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3' },
        React.createElement(Title, { title: 'The Game of Life' }),
        React.createElement(GameboardContainer, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));