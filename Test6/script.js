//1 - 12.05.2020 23:00 - 15.06.2020 01:20
//2 - 17.05.2020 00:00 - 13.09.2020 00:00
let stamp1 = Date.parse('2020-05-12 23:00')
let stamp2 = Date.parse('2020-06-15 01:20')
let stamp3 = Date.parse('2020-05-17 00:00')
let stamp4 = Date.parse('2020-09-13 00:00')
let userStrDate = prompt("Enter date", "YYYY-MM-DD HH:mm")
let userDate = new Date(userStrDate);
userDate = Date.parse(userDate)
console.log(userDate)
console.log(stamp1, stamp2, stamp3, stamp4,)
console.log(userDate<=stamp2)


function checkDate(userDate){
    if (userDate>=stamp1 && userDate>=stamp3) {
        if (userDate<=stamp2&&userDate<=stamp4) {
            console.log("UserDate includ in period1 and period2")
        }
        else if (userDate<=stamp2){
            console.log("UserDate includ in period1")
        }
        else if (userDate<=stamp4){
            console.log("UserDate include in period2")
        }  
        else{ console.log("UserDate note include in period")
        }
    }  
    else if (userDate>=stamp1 && userDate<=stamp2){
        console.log("UserDate includ in period1")
    }
    else if (userDate>=stamp3 && userDate<=stamp4){
        console.log("UserDate includ in period2")
    }
    else {
        console.log("UserDate note include in period")
    }
    }
 
    
checkDate(userDate)