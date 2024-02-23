import './BookingForm.css'; 
import {useState} from "react"; 
import { RadioGroup, RadioOption } from "./Radio";


function BookingForm() { 
 const [date, setDate] = useState(""); 
 const [time, setTime] = useState(""); 
 const [numberOfDiners, setNumberOfDiners] = useState(""); 
 const [Ocasion, setOcasion] = useState("Ocasion"); 
 const [selected, setSelected] = useState("selected");

 const getIsFormValid = () => { 
   return ( 
    selected !== "selected" &&
     Ocasion !== "Ocasion" &&
     date !== ""
   ); 
 }; 
 
 const clearForm = () => { 
   setDate(""); 
   setTime(""); 
   setNumberOfDiners(""); 
   setOcasion("Ocasion"); 
   setSelected("");
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Your Table has been Reserved. Thank you!"); 
   clearForm(); 
 }; 
 
 return ( 
   <section className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Make a Reservation</h2> 
         <div className="Field"> 
           <label> 
             Date:  <sup>*</sup> 
           </label> 
           <input 
             type="Date"
             value={date}
             onChange={(e) => { 
               setDate(e.target.value); 
             }} 
             placeholder="Date" 
           /> 

         </div> 
         <div className="Field"> 
           <label>
            Time: <sup>*</sup>
            </label> 
            <select value={time} onChange={(e) => setTime(e.target.value)}> 
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
           </select> 
         </div> 
         <div className="Field"> 
           <label> 
             Number of Diners: <sup>*</sup> 
           </label> 
           <select value={numberOfDiners} onChange={(e) => setNumberOfDiners(e.target.value)}> 
             <option value="1">1</option> 
             <option value="2">2</option> 
             <option value="3">3</option> 
             <option value="4">4</option> 
             <option value="5">5</option> 
             <option value="6">6</option> 
             <option value="7">7</option> 
             <option value="8">8</option> 
             <option value="9">9</option> 
             <option value="10">10</option> 
           </select> 
         </div> 
         <div className="Field"> 
           <label> 
             Ocasion: <sup>*</sup> 
           </label> 
           <select value={Ocasion} onChange={(e) => setOcasion(e.target.value)}> 
             <option value="Ocasion" disabled>Select Ocasion</option> 
             <option value="birthday">Birthday</option> 
             <option value="anniversary">Anniversary</option> 
             <option value="wedding">Wedding</option>
           </select> 
         </div> 
         <div className="Field"> 
           <label> 
             Seating Options: <sup>*</sup> 
           </label> 
           <div id="but">
           <RadioGroup onChange={setSelected} selected={selected}>
            <RadioOption value="Standard">Standard</RadioOption>
            <RadioOption value="Outside">Outside</RadioOption>
          </RadioGroup>
          </div>
         </div> 
         <button type="submit" disabled={!getIsFormValid()}>
           Reserve Table
         </button> 
       </fieldset> 
     </form> 
   </section> 
 ); 
} 

export default BookingForm; 
