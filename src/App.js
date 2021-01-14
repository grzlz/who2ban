import './App.css';
import { Layout } from 'antd'
import Navigation from './Navigation'
import Body from './Body'
import 'antd/dist/antd.css'

const { Header } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Layout.Content>
          <Body />
        </Layout.Content>
      </Layout>


    </div>
  );
}

export default App;
