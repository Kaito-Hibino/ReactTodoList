import { useState } from "react";
import { FillInArea } from "./components/FillInArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [showSentenseFlag, setShowSentenseFlag] = useState(true);
  const [compShowFlag, setCompShowFlag] = useState(true);
  const [over5Flag, setOver5Flag] = useState(false);
  const [normaFlag, setNormaFlag] = useState(false);

  function onChangeTodoText(e) {
    setTodo(e.target.value);
  }
  function onKeyDownAdd() {
    if (window.event.keyCode === 13) {
      document.getElementById("addTodoBtn").click();
    }
  }
  function onClickAdd() {
    if (todo === "") {
      alert("Todoが入力されていません！");
    } else {
      setIncompleteTodos([...incompleteTodos, todo]);
      setTodo("");
    }
  }
  function onClickDel(index, whichTodo, whichSetTodo) {
    const newTodos = [...whichTodo];
    newTodos.splice(index, 1);
    whichSetTodo(newTodos);
  }
  function onClickComp(index) {
    const newCompleteArr = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteArr);
    onClickDel(index, incompleteTodos, setIncompleteTodos);
  }
  function onClickReturn(index) {
    const newIncompleteArr = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteArr);
    onClickDel(index, completeTodos, setCompleteTodos);
  }
  function onClickAllDel(whichTodos, whichSetTodos, whichWord) {
    const allDelArr = [...whichTodos];
    allDelArr.splice(0, allDelArr.length);
    whichSetTodos(allDelArr);
  }
  function onCLickAllComp() {
    onClickAllDel(incompleteTodos, setIncompleteTodos);
    const newAllDelArr = [...incompleteTodos];
    const newAllCompArr = [...completeTodos, ...newAllDelArr];
    setCompleteTodos(newAllCompArr);
  }
  function onCLickAllReturn() {
    onClickAllDel(completeTodos, setCompleteTodos);
    const newAllDelArr = [...completeTodos];
    const newAllIncompArr = [...incompleteTodos, ...newAllDelArr];
    setIncompleteTodos(newAllIncompArr);
  }
  function incompCompShowFlag(whichTodo, setWhichFlag, whichFlag) {
    if (whichTodo.length >= 1) {
      whichFlag && setWhichFlag(false);
    } else {
      whichFlag || setWhichFlag(true);
    }
  }
  function over5Alert() {
    const addTodoBtn = document.getElementById("addTodoBtn");
    if (incompleteTodos.length >= 5) {
      addTodoBtn.disabled = true;
      over5Flag || setOver5Flag(true);
    } else if (addTodoBtn) {
      addTodoBtn.disabled = false;
      over5Flag && setOver5Flag(false);
    }
  }
  function showNorma() {
    const norma = document.getElementById("chooseNorma");
    if (norma === null) {
      return;
    } else {
      if (completeTodos.length >= norma.value) {
        normaFlag || setNormaFlag(true);
      } else if (completeTodos.length < norma.value) {
        normaFlag && setNormaFlag(false);
      } else if (norma.value === "ノルマを設定") {
        return;
      }
    }
  }
  incompCompShowFlag(incompleteTodos, setShowSentenseFlag, showSentenseFlag);
  incompCompShowFlag(completeTodos, setCompShowFlag, compShowFlag);
  over5Alert();
  showNorma();
  return (
    <>
      {/* 入力部分 */}
      <FillInArea
        todo={todo}
        onChange={onChangeTodoText}
        onkeyDown={onKeyDownAdd}
        onClickAdd={onClickAdd}
        incompleteTodos={incompleteTodos}
        completeTodos={completeTodos}
        over5Flag={over5Flag}
        normaFlag={normaFlag}
      />
      {/* 未完了　*/}
      <IncompleteArea
        incompleteTodos={incompleteTodos}
        setIncompleteTodos={setIncompleteTodos}
        onClickComp={onClickComp}
        onClickDel={onClickDel}
        onCLickAllComp={onCLickAllComp}
        onClickAllDel={onClickAllDel}
        showSentenseFlag={showSentenseFlag}
      />
      {/* 完了 */}
      <CompleteArea
        completeTodos={completeTodos}
        setCompleteTodos={setCompleteTodos}
        onClickReturn={onClickReturn}
        onClickDel={onClickDel}
        onCLickAllReturn={onCLickAllReturn}
        onClickAllDel={onClickAllDel}
        compShowFlag={compShowFlag}
      />
    </>
  );
}
