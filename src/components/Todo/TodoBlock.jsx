import Button from "../UI/Button";
import pin from "../../icons/pin.svg";
import trash from "../../icons/trash.svg";

function TodoBlock({
  name,
  isDone,
  isPined,
  onTodoRemove,
  onTodoDone,
  onTodoPin,
}) {
  return (
    <li
      className={`todo__list__item${isDone ? " active" : ""}`}
      onDoubleClick={onTodoDone}
    >
      <p>{name}</p>
      <Button type="button" onClick={onTodoPin}>
        <img src={pin} className={`pin${isPined ? " active" : ""}`} alt="pin" />
      </Button>

      <Button type="button" onClick={onTodoRemove}>
        <img src={trash} alt="trash" />
      </Button>
    </li>
  );
}

export default TodoBlock;
