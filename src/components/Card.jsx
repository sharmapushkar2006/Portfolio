function Card(props){
    return(
    <div className="card">
    <div className="head">{props.title}</div>
    <div className="content">
    {props.content}
    <br />
    <button className="button">TRY IT !</button>
    <button className="button"onClick>Source Code(github)</button>
  </div>
</div>
    )

}