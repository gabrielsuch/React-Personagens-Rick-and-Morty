import "./style.css"

const CharCard = ({character}) => {

    return(
        <div className="characters">
            <li key={character.id}>
                <p>{character.name}</p>
                <img src={character.image} alt={character.name} />
                <div className={
                    character.status === "Alive" ?
                    "alive" :
                    character.status === "Dead" ?
                    "dead" :
                    "unknown"
                }>
                    <p>{character.status}</p>
                </div>
                <p>{character.species}</p>
            </li>
        </div>
    )
}

export default CharCard