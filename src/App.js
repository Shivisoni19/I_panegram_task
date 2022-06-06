import { useState } from "react";
import "./App.css";
import DateTimeMonth from "./components/DateTimeMonth";
import TimeZone from "./components/TimeZone";
import WeeklyInfo from "./components/WeeklyInfo";

function App() {

  const [week1, setWeek1] = useState();
  const [week2, setWeek2] = useState();
  const [week3, setWeek3] = useState();
  const [week4, setWeek4] = useState();
  const [week5, setWeek5] = useState();

  const PrevWeekHandleChange = () => {
    
      const newDate = new Date();
      let updateWeek1 = `${newDate.getDate() - 7}/${
        newDate.getMonth() + 1
      }/${newDate.getFullYear()}`;
      let updateWeek2 = `${newDate.getDate() - 8}/${
        newDate.getMonth() + 1
      }/${newDate.getFullYear()}`;
      let updateWeek3 = `${newDate.getDate() - 9}/${
        newDate.getMonth() + 1
      }/${newDate.getFullYear()}`;
      let updateWeek4 = `${newDate.getDate() - 10}/${
        newDate.getMonth() + 1
      }/${newDate.getFullYear()}`;
      let updateWeek5 = `${newDate.getDate() - 11}/${
        newDate.getMonth() + 1
      }/${newDate.getFullYear()}`;
  
      setWeek1(updateWeek1);
      setWeek2(updateWeek2);
      setWeek3(updateWeek3);
      setWeek4(updateWeek4);
      setWeek5(updateWeek5);
    
  }

  const NextWeekHandleChange = ()=>{
    const newDate = new Date();
    let updateWeek1 = `${newDate.getDate() + 7}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
    let updateWeek2 = `${newDate.getDate() + 8}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
    let updateWeek3 = `${newDate.getDate() + 9}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
    let updateWeek4 = `${newDate.getDate() + 10}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
    let updateWeek5 = `${newDate.getDate() + 11}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;

    setWeek1(updateWeek1);
    setWeek2(updateWeek2);
    setWeek3(updateWeek3);
    setWeek4(updateWeek4);
    setWeek5(updateWeek5);
  }
  

  return (
    <div className="App">
      <div className="week">
        <div className="prevWeek">
        <button className="bg-white text-primary border-0 " onClick={PrevWeekHandleChange}><i class='fas fa-caret-left' style={{fontSize:'24px', marginRight:"5px"}}></i>Previous Week</button>
          </div>

        <DateTimeMonth />

        <div className="nextWeek">          
          <button className="bg-white text-primary border-0" onClick={NextWeekHandleChange}>Next Week<i class='fas fa-caret-right' style={{fontSize:'24px',marginLeft:"5px"}}></i></button>
        </div>

      </div>

      <TimeZone />

      <WeeklyInfo
        newWeek1={week1}
        newWeek2={week2}
        newWeek3={week3}
        newWeek4={week4}
        newWeek5={week5}
      />

    </div>
  );
}

export default App;
