import MouseTest from "../components/MouseTest";
import useMousePosition from './../hooks/useMousePosition'

function Home() {
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>这是首页</h1>
          <h2>x:{position.x },y:{position.y }</h2>
          <MouseTest></MouseTest>
          <h1><a href='#/imgchange'>去image</a></h1>
          <h1><a href='#/detail'>detail</a></h1>
          <h1><a href='#/toChild'>componentReceiveProps</a></h1>
        </div>
      </header>
    </div>
  );
}
export default Home
