import { FC } from "react";
import { render } from "react-dom";

const TodoInput: FC = () => {
	return(
		<div>
			<input placeholder="新規TODOを入力してください" />
			<button>登録</button>
		</div>
	);
}

export default TodoInput;