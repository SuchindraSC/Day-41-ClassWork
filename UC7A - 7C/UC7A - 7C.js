//UC6
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}


function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalempHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(totalempHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalempHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalempHrs);
console.log("Total Days: "+totalWorkingDays+" Total Hours: "+totalempHrs+" EmpWage: "+empWage);

//UC7A
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: "+totalWorkingDays+" Total Hours: "+totalempHrs+" Emp Wage: "+totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Emp Wage With Reduce: "+empDailyWageArr.reduce(totalWages, 0));

//UC7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr +" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B- Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fultime Wage Earned");
console.log(fullDayWageArr);