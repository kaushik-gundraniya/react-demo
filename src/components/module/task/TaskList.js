import {Card, ListGroup} from 'react-bootstrap';
import deleteIcon from '../../../icons/trash.svg';
import checkIcon from '../../../icons/check-circle.svg'
import { Link } from 'react-router-dom';

const TaskList = ({tasks, handleDelete, handleMark}) => {
    return (
    <Card className='mt-4'>
        
        <ListGroup variant="flush">
            {tasks.map((task) => (
                <ListGroup.Item key={task.id} style={{ textDecoration : task.isMark ? "line-through" : "none" } }>
                    {task.title}
                    <Link  onClick={() => handleDelete(task.id)}><img src={deleteIcon} style={{float : "right"}} alt="Delete Icon"/></Link>
                    <Link  onClick={() => handleMark(task.id)}><img src={checkIcon} style={{float : "right",height:"2"}} alt="Edit Icon"/></Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Card>);
}


export default TaskList;