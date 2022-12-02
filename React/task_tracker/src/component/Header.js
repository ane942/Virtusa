
import Button from './Button';

const Header=({onAdd,showAdd})=>{
    return(
        <header ><h1 style={headingStyle}><center>Task Tracker</center>                                                                           
        </h1>
        <center><Button color={showAdd?'red':'green'} text={showAdd?'close':'Add'}onClick={onAdd}/></center>
        
        </header>
    )
};


const headingStyle={
    backgroundColor:' #8bd4cb',
    
}
export default Header