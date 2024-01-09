import {useState} from "react"

export default function Clock(){
const [hour,setHour]=useState(new Date().getHours());
const [min,setMin]=useState(new Date().getMinutes());
const [sec,setSec]=useState(new Date().getSeconds());
const addZero=(check)=> check < 10?"0"+ check:check;
const currentTime=()=>{

var hour=new Date().getHours();
if(hour >12){
  hour=hour % 12;
}
var hours=addZero(hour)


var min=new Date().getMinutes()
 var mins=addZero(min)
var sec=new Date().getSeconds()
var secs=addZero(sec)
setHour(hours);
setMin(mins);
setSec(secs); 

}

setInterval(currentTime,1000)
return(
    <>
 <div className="clock"> <span>{hour} : </span>  <span>{min} : </span>  <span> {sec}</span> <small className="bold">{new Date().getHours <12 ? "am":"pm"}
   </small> </div>
    </>)
}