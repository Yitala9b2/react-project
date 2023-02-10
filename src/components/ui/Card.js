import './Card.css'
const Card = (props) =>{
    // используем чтобы не дублировать стили такие как br и bs 
    const classes = 'card ' + props.className;// чтобы добавить к классу 'card' классы вложенных элементов 
    return <div className={classes}>{props.children}</div>// если у нас элементы в кастомных тегах 'Card',
    //необходимо добавить props.children (смотри CostItem)
}
export default Card;