/*
    Problem: Cash Register
    Description:
    Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

    cid is a 2D array listing available currency.

    The checkCashRegister() function should always return an object with a status key and a change key.

    Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

    Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

    Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

        Currency Unit	            Amount
        Penny	                $0.01 (PENNY)
        Nickel	                $0.05 (NICKEL)
        Dime	                $0.1 (DIME)
        Quarter	                $0.25 (QUARTER)
        Dollar	                $1 (ONE)
        Five Dollars            $5 (FIVE)
        Ten Dollars	            $10 (TEN)
        Twenty Dollars          $20 (TWENTY)
        One-hundred Dollars     $100 (ONE HUNDRED)

    See below for an example of a cash-in-drawer array:
        [
            ["PENNY", 1.01],
            ["NICKEL", 2.05],
            ["DIME", 3.1],
            ["QUARTER", 4.25],
            ["ONE", 90],
            ["FIVE", 55],
            ["TEN", 20],
            ["TWENTY", 60],
            ["ONE HUNDRED", 100]
        ]
*/

/**
 * Checks cash register.
 * @param {float} price 
 * @param {int} cash 
 * @param {object} cid 
 * @returns object
 */
function checkCashRegister(price, cash, cid) {
    // Define the currency unit values in cents
    console.log(typeof cid)
    const currencyUnits = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    }

    // Calculate the change due in cents
    let changeDue = (cash * 100) - (price * 100);

    // Calculate the total cash in drawer in cents
    const totalCashInDrawer = cid.reduce((total, currency) => total + (currency[1] * 100), 0)

    // Initialize the change array
    let change = []

    // IF the changeDue is greater than totalCashInDrawer
    if (changeDue > totalCashInDrawer) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    // ELSE IF the changeDue is equal to totalCashInDrawer
    else if (changeDue === totalCashInDrawer) {
        return {status: "CLOSED", change: cid}
    }
    // ELSE, compute the change
    else {
        // Traverse the cash in drawer
        for (let i = cid.length - 1; i >= 0; i--) {
            const currencyName = cid[i][0]
            const currencyValue = currencyUnits[currencyName];
            const available = Math.floor(cid[i][1] * 100);
            const maxChange = Math.min(available, changeDue);
            const numUnits = Math.floor(maxChange / currencyValue);
            if (numUnits > 0) {
                change.push([currencyName, numUnits * (currencyValue / 100)]);
                changeDue -= numUnits * currencyValue;
                changeDue = Math.round(changeDue);
            }
        }

        if (changeDue === 0) {
            return {status: "OPEN", change: change};
        } 
        else {
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
