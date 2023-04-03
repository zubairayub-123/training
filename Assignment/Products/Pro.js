import { FaTimes } from 'react-icons/fa'

const Pro = ({pro, onDelete})=> {
    return(
        <div className={`event`}>
            <h3>{pro.name} {' '}
            <FaTimes style={{color: 'red', cursor:'pointer'}}
            onClick={() => onDelete(pro.id)}/>
            </h3>
            <h5>{pro.price}</h5>
            <p>{pro.desc}</p>
        </div>
    )
}

export default Pro