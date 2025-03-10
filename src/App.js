import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 고기 맛집', '파이썬독학']);
  let [날짜, 날짜변경] = useState(['2월 17일 발행', '2월 18일 발행', '2월 19일 발행']);
  let [like, like변경] = useState(0);
  let [input, setInput] = useState('');

  let [modal, setModal] = useState(true);


  function addLike() {
    like변경(like + 1);
  }

  function setTitle(){
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }
  function setSort(){
    let newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>블로그</h4>
      </div>
      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={addLike}>👍</span> { like } </h4>
        <p>{ 날짜[0] }</p>
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>변경</button>
        <button onClick={setSort}>제목정렬</button>
      </div> */}
      {글제목.map((post, i) => {
        return (
          <div className='list' key={i}>
            <h4 onClick={() => {setModal(!modal)}}>{post}</h4>
            <p>2월 17일 발행</p>
            <hr />
            <button onClick={() => {
              //삭제
              let newArray = [...글제목];
              newArray.splice(i, 1);
              글제목변경(newArray);
            }}>삭제</button>
          </div>
        )}
      )}
      <button onClick={() => setModal(!modal)}>modal 열기/닫기</button>
      {
        modal === true ? <Modal 글제목={글제목} update={setTitle} /> : null
      }

      <input onChange={(e) => {
        setInput(e.target.value);
      }}/>
      <button onClick={() => {
        let newArray = [...글제목];
        newArray.unshift(input);
        글제목변경(newArray);
      }}>저장</button>
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className='list' >
      <h2>{props.글제목[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.update}>글수정</button>
    </div>
  );
}

export default App;
