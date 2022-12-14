import './CostItem.css'
import CostDate from './CostDate';
import Card from "../ui/Card"

function CostItem(props) {
    //const costDate = new Date(2021, 2, 12); //создаем объект даты
    //const costDescription = 'Холодильник';
    //const costAmount = 999.99;

    return (
        <Card className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default CostItem;
