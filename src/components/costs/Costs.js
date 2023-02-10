
import "./Costs.css";
import Card from "../ui/Card";
import CostsFilter from "../NewCost/CostsFilter";
import React, { useState } from 'react'
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";


function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2021');


    const yearChangeHandler2 = (year) => {
        setSelectedYear(year)



    }
    const filteredCosts = props.costs.filter((cost) => {
        //return cost.date = year;
        const fullYear = cost.date.getFullYear().toString()
        return fullYear === selectedYear;

    })
    
    return (
        <div>
            <Card className="costs">
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler2} />
                    <CostsDiagram costs={filteredCosts}/>
                {/* отображаем динамически для этого ставим скобки */}
                <CostList costs = {filteredCosts}/>
                {/*{filteredCosts.length === 0 ? <p>В этом году расходов нет</p> : filteredCosts.map((cost) => (
                    <CostItem
                        key={cost.id}
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount}
                    />
                ))}*/}
                

                {/*<CostItem
                    date={props.costs[0].date}
                    description={props.costs[0].description}
                    amount={props.costs[0].amount} />

                <CostItem
                    date={props.costs[1].date}
                    description={props.costs[1].description}
                    amount={props.costs[1].amount} />

                <CostItem
                    date={props.costs[2].date}
                    description={props.costs[2].description}
                    amount={props.costs[2].amount} />*/}
            </Card>
        </div>
    );
}
export default Costs;