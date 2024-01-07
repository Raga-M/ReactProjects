import  {useContext} from 'react'
import CreateNewContext from './CreateNewContext'

export default function States (){
   const name=useContext(CreateNewContext)
    return(
        <>
        <p>{name}</p>
        </>)}