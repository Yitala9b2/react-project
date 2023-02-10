import './CostItem.css'
import CostDate from './CostDate';
import Card from "../ui/Card";



function CostItem(props) {
    //const myDate = new Date(2021, 2, 12); //создаем объект даты
    //const costDescription = 'Холодильник';
    //const costAmount = 999.99;
    


    return (
        // к 'Card' добавляется класс его детей 'cost-item'
        <li>
        <Card className='cost-item'>
            {/*<div >{myDate.toString()}</div>*/}
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            
        </Card>
        </li>
    );
}

export default CostItem;
