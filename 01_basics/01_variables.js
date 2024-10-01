const accountID = 144556
let accountEmail = "example@gmail.com"
var accountPassword = 12345
accountCity = "Jaipur"
let accountState

// accountID = 2 // not allowed

accountEmail = "hc@gmail.com"
accountPassword = 7890
accountCity = "Mumbai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
