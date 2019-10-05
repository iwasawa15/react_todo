import React, { FC, useState } from "react";
import { render } from "react-dom";
import { func } from "prop-types";

interface Props{
	addTodo: (name: string) => void
}

const TodoInput: FC<Props> = (props) => {
	const [inputValue, setValue] = useState('');

	function handleClick(e: React.MouseEvent<HTMLButtonElement>){
		e.preventDefault();
		props.addTodo(inputValue)
	}

	function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setValue(e.target.value);
	}
	return(
		<div>
			<input placeholder="新規TODOを入力してください" value={inputValue} onChange={handleChange} />
			<button onClick={handleClick}>登録</button>
		</div>
	);
}

export default TodoInput;