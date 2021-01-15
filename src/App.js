import './App.css';
import { Layout } from 'antd'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import About from './About'
import Resultados from './Resultados'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css'

const { Header } = Layout;

function App() {
  return (
    <Router>

      <div className="App">
        <Layout>
          <Header>
            <Navigation />
          </Header>
          <Layout.Content>
            <Route path='/about' component={About }/>
            <Route path='/' exact component={SearchBar}/>
            <Route path='/resultados' component={Resultados}/>
          </Layout.Content>
        </Layout>


      </div>
    </Router>
  );
}

export default App;
