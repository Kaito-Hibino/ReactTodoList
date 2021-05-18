import styled from "styled-components";

export const FillInArea = (props) => {
  const {
    todo,
    onChange,
    onkeyDown,
    onClickAdd,
    incompleteTodos,
    completeTodos,
    over5Flag,
    normaFlag,

  } = props;
  const normaArr = ["ノルマを設定", "1", "2", "3", "4", "5"];

  return (
    <div className="input-area">
      <p className="title">今日のTodo</p>
      <select id="chooseNorma" size="1">
        {normaArr.map((norma) => {
          return (
            <option key={norma} value={norma}>
              {norma}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <input
        className="inputTodo"
        placeholder="todoを入力"
        value={todo}
        onChange={onChange}
        onKeyDown={onkeyDown}
      />
      <button id="addTodoBtn" onClick={onClickAdd}>
        追加
      </button>
      {over5Flag && <SAlertP>未完了のTodoを消化してください!!</SAlertP>}
      {normaFlag && <SGoodP>今日のノルマを達成しました！！</SGoodP>}
      <p>{`未完了:${incompleteTodos.length}　完了:${completeTodos.length}`}</p>
    </div>
  );
};

const SAlertP = styled.p`
  color: red;
  font-size: 18px;
  line-height: 20px;
`;
const SGoodP = styled.p`
  color: blue;
  font-size: 18px;
  line-height: 20px;
`;
