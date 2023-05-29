import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import ListItem from "./ListItem";

function ListGroup(){

    const {todos} = useContext(GlobalContext)

    return(
        <div className="ul-section">
        <ul className="list-group">
            {
            todos.map((todo)=>
                <ListItem key={todo.id} todo={todo}/>
            )
        }
        </ul>
        </div>
    )
}

export default ListGroup