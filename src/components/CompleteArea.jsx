export const CompleteArea = (props) => {
  const {
    completeTodos,
    setCompleteTodos,
    onClickReturn,
    onClickDel,
    onCLickAllReturn,
    onClickAllDel,
    compShowFlag
  } = props;
  
  return (
    <div className="complete-area">
      <p className="title">完了したTodo</p>
      {compShowFlag && <p>完了したTodoはありません</p>}
      <div>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="list">
                <div className="list-containts">
                  <p>{todo}</p>
                  <button onClick={() => onClickReturn(index)}>戻す</button>
                  <button
                    onClick={() =>
                      onClickDel(index, completeTodos, setCompleteTodos)
                    }
                  >
                    削除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        {compShowFlag || (
          <button className="allDelBtn" onClick={onCLickAllReturn}>
            すべて戻す
          </button>
        )}
        {compShowFlag || (
          <button
            className="allDelBtn"
            onClick={() => onClickAllDel(completeTodos, setCompleteTodos)}
          >
            すべて削除
          </button>
        )}
      </div>
    </div>
  );
};
