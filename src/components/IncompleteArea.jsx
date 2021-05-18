export const IncompleteArea = (props) => {
  const {
    incompleteTodos,
    setIncompleteTodos,
    onClickComp,
    onClickDel,
    onCLickAllComp,
    onClickAllDel,
    showSentenseFlag
  } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      {showSentenseFlag && <p>未完了のTodoはありません</p>}
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo} className="list">
              <div className="list-containts">
                <p>{todo}</p>
                <button onClick={() => onClickComp(index)}>完了</button>
                <button
                  onClick={() =>
                    onClickDel(index, incompleteTodos, setIncompleteTodos)
                  }
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {showSentenseFlag || (
        <button className="allCompBtn" onClick={onCLickAllComp}>
          すべて完了
        </button>
      )}
      {showSentenseFlag || (
        <button
          className="allDelBtn"
          onClick={() => onClickAllDel(incompleteTodos, setIncompleteTodos)}
        >
          すべて削除
        </button>
      )}
    </div>
  );
};
