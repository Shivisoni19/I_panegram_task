import React from "react";
import DayTiming from "./DayTiming";

export default function WeeklyDetails(props) {
  
  const WEEK_DAYS = {
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
  };
  return (
    <div className="weeklyDetails">
      <div className="weeklyDays">
         
          <table>
            <tr>
                <td className="daysName"> {WEEK_DAYS.Monday} <br/><span>{props.newWeek1}</span> </td>
                <td><DayTiming/> </td>             
            </tr>
            <tr>
                <td className="daysName"> {WEEK_DAYS.Tuesday} <br/><span>{props.newWeek2}</span> </td>
                <td> <DayTiming/></td>                
            </tr>
            <tr>
                <td className="daysName"> {WEEK_DAYS.Wednesday} <br/><span>{props.newWeek3}</span> </td>
                <td><DayTiming/></td>                
            </tr>
            <tr>
                <td className="daysName"> {WEEK_DAYS.Thursday} <br/><span>{props.newWeek4}</span> </td>
                <td> <DayTiming/></td>                
            </tr>
            <tr>
                <td className="daysName"> {WEEK_DAYS.Friday} <br/><span>{props.newWeek5}</span> </td>
                <td> <DayTiming/></td>                
            </tr>
          </table> 
          </div>
      
    </div>
  );
}
