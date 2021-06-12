const Item = ({ note, date, time, id, deleteData, submittingItem }) => {
    function deleteItem() {
        submittingItem.current = true;
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)
        })
    }

    return <div className="item">
        <div>{note}</div>
        <div>{`${date} ${time}`}</div>
        <button onClick={deleteItem} className="remove">刪除</button></div>
}

export default Item