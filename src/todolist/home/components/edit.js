import { useState } from "react"
import { v4 } from 'uuid';

const Edit = ({ add, submittingItem }) => {
    function addItem() {
        submittingItem.current = true;
        // add 是 setItem
        add(function (prev) {
            return [{ note, date, time, id: v4() }, ...prev]
        })
        setNote('');
    }
    /** 事項 */
    const [note, setNote] = useState('');
    function noteChange(e) {
        setNote(e.target.value);
    }
    /** 日期 */
    const [date, setDate] = useState('2021-05-07');
    function dateChange(e) {
        setDate(e.target.value);
    }
    /** 時間 */
    const [time, setTime] = useState('');
    function timeChange(e) {
        setTime(e.target.value);
    }


    return <div className="edit">
        <h1>記事本</h1>
        <p>事項：</p>
        <input type="text" value={note} onChange={noteChange} placeholder="type something"></input>
        <p>日期：</p>
        <input type="date" value={date} onChange={dateChange}></input>
        <p>時間：</p>
        <input type="time" value={time} onChange={timeChange}>
        </input>
        <button onClick={addItem} className="add">新增</button>
    </div>
}
export default Edit