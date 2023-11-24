import './Styles/index.css'

import { HomeComponent } from "./Components/HomeComponent";
import { Container } from './Components/Container';

function App() {
  return (
    <div className="app">
      <Container>
        <HomeComponent />
      </Container>
    </div>
  );
}

export default App;
