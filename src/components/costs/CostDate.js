import './CostDate.css'
function CostDate(props) {
    console.log(props)
    const month = props.date.toLocaleString('ru-RU', { month: 'long' });
    const year = props.date.getFullYear(); // полный год
    const day = props.date.toLocaleString('ru-RU', { day: '2-digit' }); // 2 числа

    return (
        <div className='cost-date'>
            <div className='cost-date__month'>{month}</div>
            <div className='cost-date__year'>{year}</div>
            <div className='cost-date__day'>{day}</div>
        </div>
    )
}
export default CostDate