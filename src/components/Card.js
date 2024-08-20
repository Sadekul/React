//its call Props
function Card(Props){
  const {name, desc} = Props;
    return(
      <div className="card">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    )
 

  }
  export default Card;