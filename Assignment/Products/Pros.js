import Pro from "./Pro"

const Pros = ({pros, onDelete}) => {
    return (
    <>
        {
            pros.map((pro) => (
            <Pro key={pro.id} pro={pro} onDelete={onDelete}/>
            ))
        }

    </>
  )
}

export default Pros