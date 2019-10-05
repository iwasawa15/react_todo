import { FC } from "react";

interface Props{
	name: string,
	key: number
}
const TodoItem: FC<Props> = (props) => {
	return(
		<li>
			{props.name}
		</li>
	)
}

export default TodoItem;