import { FC } from "react";

interface Props{
	id: number,
	name: string
}
const TodoItem: FC<Props> = (props) => {
	return(
		<li>
			{props.name}
		</li>
	)
}

export default TodoItem;