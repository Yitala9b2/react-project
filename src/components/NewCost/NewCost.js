import './NewCost.css'
import CostForm from './CostForm';
import React, {useState} from 'react'




const NewCost =(props) =>{
    const [isFormVisible, setIsFormVisible] = useState(false)
    console.log(isFormVisible)
    const saveCostDataHandler =(inputCostData)=>{
        const costData ={
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData);
        setIsFormVisible(false)
    }
    const inputCostDataHandler = () =>{
        setIsFormVisible(true)
    }
    const cancelCostHandler= ()=>{
        setIsFormVisible(false)
    }
    return <div className='new-cost'>
        {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
        {/*если форма не видима то при нажатии становится видимой*/}
        {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>}
    </div>
}

export default NewCost;