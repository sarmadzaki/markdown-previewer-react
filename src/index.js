import React from 'react';
import ReactDOM from 'react-dom';
import showdown from 'showdown';
import logo from './logo.svg';
import './App.css';


// import App from './App';
import './index.css';

const Header = () => (
  <header className='jumbotron'>
    <h1 className='text-center'>
      <img src={logo} height="100" className="App-logo" alt="logo"/><br/> 
      Markdown Previewer
    </h1>
    <hr />
  </header>
);

class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      converter: new showdown.Converter(),
      value: "#####SAMPLE TEXT",
    };
  }

  createMarkup() {
    return {__html: this.state.converter.makeHtml(this.state.value) };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (<div className='row'>
              <div className='col-sm-6'>
                <h1>Write here!!</h1>
                <hr/>
                <textarea
                  type='text'
                  defaultValue={this.state.value}
                  onChange={this.handleChange.bind(this)}
                  id='markdown'
                  className='col-xs-10 col-xs-offset-1 full-height'></textarea>
              </div>
              <div className='col-sm-6 '>
                <h1> Previewe </h1>
                <hr/>
                <div id='htmlArea'
                     className='col-xs-10 col-xs-offset-1 full-height'>
                  <div dangerouslySetInnerHTML={this.createMarkup()} />
                </div>
              </div>
            </div>);
  }
}

const Footer = () => (
  <footer className='col-xs-8 col-xs-offset-2'>
    <hr />
    <p className='text-center'>
      Markdown Previewer created by <a href="https://github.com/sarmadzaki" target='_blank' className='text-warning'>Sarmad Zaki</a>
    </p>
  </footer>
);

const App = () => (
  <div className='container-fluid'>
    <Header/>
    <Markdown/>
    <Footer/>
  </div>
);

document.write('<div id="app"></div>');
ReactDOM.render(<App/>, document.getElementById('app'));
