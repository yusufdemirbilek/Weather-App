
import './App.css';
import Container from './components/Container';
import {WeatherProvider} from './context/WeatherContext'
function App() {
  return (
    <WeatherProvider>
      <Container></Container>
    </WeatherProvider>

  );
}

export default App;
