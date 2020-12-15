import ImgChange from './image/index'
import url from './../static/image/dadada.jpg'
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            success
          </h1>
        </div>
        <div>
          <ImgChange />
        </div>
        <div>
          <img src={url}/>
          {/* <img src="./../../s" alt=""/> */}
        </div>
      </header>
    </div>
  );
}
export default Home
