import Item from "./item"
import { v4 } from 'uuid';

const List = ({ listItem, deleteData,submittingItem }) => {

    return <div>{listItem.map(
        item => {
            const { note, date, time, id } = item;
            return <Item key={id} note={note} date={date} time={time} id={id} deleteData={deleteData} submittingItem={submittingItem}/>
        })}</div>
}

export default List