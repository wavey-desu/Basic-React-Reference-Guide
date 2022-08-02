export default function Title(props) { //pass prop from 'parent' component
    return (
        //react fragment-outputs child elements as standalone parents
        <> 
            <h1 className="title">{props.title}</h1>
            <br />
            <h2 className="subtitle">{props.subtitle}</h2>
        </>
    )
}