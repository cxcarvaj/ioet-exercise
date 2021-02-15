import fs from 'fs';

export const abbreviations = ["MO","TU","WE","TH","FR"];

export const getDataDicc = () =>{
  let dataDicc = {}
  try {
    const txtLines = fs.readFileSync('files/data.txt','utf-8').split("\n");
    for (const lines of txtLines){
      const [employeeName, stringData] = lines.trim().split("=");
      const stringArray = stringData.split(",");
      dataDicc[employeeName] = [...dataDicc[employeeName] || [], ...stringArray];
    }
    return dataDicc;

  }catch(e){
    console.log('Error:',e.stack);
  }
};

export const isInRangeHours = (employee_star_hour, schedule_start_hour, employee_ends_hour, schedule_ends_hour) =>{
  return (employee_star_hour >= schedule_start_hour) && (employee_ends_hour <= schedule_ends_hour);
};

export const calculateProfitsPerHour = (schedule, employeeHours) =>{
  let profit = 0;
  for (const [hours, payment] of Object.entries(schedule)){
    let [schedule_begin, schedule_end] = hours.split("-");
    let [hour_begin, hour_end] = employeeHours.split("-");
    let employee_star_hour = parseInt(hour_begin.slice(0,2));
    let schedule_start_hour = parseInt(schedule_begin.slice(0,2));
    let employee_ends_hour =parseInt(hour_end.slice(0,2))
    let isMidnight= parseInt(schedule_end.slice(0,3))===0
    let schedule_ends_hour = (isMidnight) ? 24 : parseInt(schedule_end.slice(0,3));
    if(isInRangeHours(employee_star_hour,schedule_start_hour,employee_ends_hour,schedule_ends_hour)){
        profit=+(employee_ends_hour-employee_star_hour)*(payment)
    }

  }
  return profit;
};

