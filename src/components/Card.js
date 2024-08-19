//its call Props
function Card(props){

  //its call disctructure
const {titleText, descText} = props;

    return <div className='card'>
    <h3 className='cardTitle'>{titleText}</h3>
    <p className='cardDesc'>{descText}</p>
    <p className=' cardFooter'>{props.footerTitle}</p>
  </div>
  }

  export default Card;