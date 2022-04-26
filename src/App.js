import { useState } from 'react'
import logo from './assets/logo.svg'
import './css/App.css'

import TestComponent from './components/global/TestComponent/TestComponent'

function App() {

  // react 不會監聽常數去重新渲染頁面
  const testArr = ["123", "456", "789"]

  // useState => react 才會監聽變動去渲染頁面
  const [ testStr, setTestStr ] = useState("123")

  // 父傳給子 Function, 子藉此傳遞參數上來
  function onBtnClick(test) {
    // 要注意不能使用 push 等方法修改原始變數, 應該使用 map 等取代完整數值

    // 如果更新數值依賴前一個數值, 建議使用 function 回傳來取得最新的 state ( state 會有非同步問題)
    setTestStr((previousTestStr) => {
      return test
    })
  }

  const [testInputVal, setTestInputVal] = useState("123")
  function testInputOnChange(e) {
    setTestInputVal(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>testStr : {testStr}</h2>
        <TestComponent list={testArr} onBtnClick={onBtnClick}/>

        <h3>testInputVal: {testInputVal}</h3>
        <input type="text" value={testInputVal} onChange={testInputOnChange} />
      </header>
    </div>
  );
}

export default App;
