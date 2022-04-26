import './TestComponent.scss'

function TestComponent(props) {
  const { list, onBtnClick } = props

  const listDom = () => {
    return list.map((el) => {
      // 元件最外層只會有一個元素, 且建議要有 key 屬性 (有助於效能)
      return <div key={el}>
        <span>{el}</span>
      </div>
    })
  }

  const btnOnClickEvt = () => {
    console.log("\x1b[36m%s\x1b[0m", `===456===`)
    onBtnClick("456")
  }

  return (
    <div className="testComponent">
      <h1>testComponent</h1>
      <button onClick={btnOnClickEvt}>Button</button>
      {listDom()}
    </div>
  );
}

export default TestComponent;
