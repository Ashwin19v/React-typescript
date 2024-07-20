import React, { useRef } from "react";
import "./input.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handle: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handle }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handle(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="enter your tasks"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="inputbox"
      />
      <button className="submitbtn" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
