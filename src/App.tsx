import Body from './components/Body';
import WindowContainer from './components/WindowContainer';
import StaticStars from './components/StaticStars';

function App() {

  return (
    <WindowContainer color={'black'}>
      <StaticStars />
        <Body />
    </WindowContainer>
  )
}

export default App
