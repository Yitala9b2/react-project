import Costs from "./components/costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from 'react'

const INITIAL_COSTS = [
    {
        id:'c1',
        date: new Date(2020, 2, 12),
        description: 'Холодильник',
        amount: 999.99
    },
    {
        id:'c2',
        date: new Date(2021, 11, 25),
        description: 'MacBook',
        amount: 1254.72
    },
    {
        id:'c3',
        date: new Date(2021, 3, 1),
        description: 'Джинсы',
        amount: 49.99
    },
    {
        id:'c4',
        date: new Date(2022, 5, 13),
        description: 'кепка',
        amount: 29
    },
    {
        id:'c5',
        date: new Date(2022, 10, 25),
        description: 'чайник',
        amount: 500
    }
]


const App = () => {
    const[costs, setCosts] = useState(INITIAL_COSTS);
    
    const addCostHandler =(cost) =>{
        //обновляющая функция, берет состояние зависящее от предыдущего
        setCosts(prevCosts => {
            console.log(cost)
            
           return [cost, ...prevCosts]})
    }
    return (
        <div >
           
        <NewCost onAddCost ={addCostHandler}/>
        <Costs costs={costs}/>
        </div>
    );
}

export default App;
