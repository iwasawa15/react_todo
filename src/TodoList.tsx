import React, { FC } from "react";
import TodoItem from "./TodoItem";

interface Task{
	id: number,
	name: string
}

interface Props{
	tasks: Task[]
}

const TodoList: FC<Props> = (props) => {
	const list = props.tasks.map(task => {
		return(
			<TodoItem {...task} />
		);
	})

	return(
		<div>
			<ul>
				{list}
			</ul>
		</div>
	)
}

export default TodoList;