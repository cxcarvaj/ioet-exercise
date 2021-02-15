import {getDataDicc, calculateProfitsPerHour, abbreviations} from './functions/functions.js'
import {jsonDicc} from './files/information.js';

const dataDicc = getDataDicc();

for (const [employeeName, arrayData] of Object.entries(dataDicc)){
  var profit = 0;
  for(const data of arrayData){
    const employeeHours = data.slice(2,);
    if(abbreviations.includes(data.slice(0,2))){
      profit+=calculateProfitsPerHour(jsonDicc['weekdays'],employeeHours);
    }else{
      profit+=calculateProfitsPerHour(jsonDicc['weekends'],employeeHours);
    }
  }
  console.log(`The amount to pay ${employeeName} is: ${profit} USD`)
}
