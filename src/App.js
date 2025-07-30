import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize: '20px'}}> 블로그 </h4>
      </div>
      <h4> {post} </h4> {/* 변수는 중괄호 (jsx)*/}
    </div>
  );
}

export default App;
