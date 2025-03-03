
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let result = [];

  for (let account of array) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    let balance = account.balance;

    if (!account.deposits || !account.withdrawals) {
      continue;
    };

    for (let deposits of account.deposits) {
      totalDeposits += deposits;
    };

    for (let withdrawals of account.withdrawals) {
      totalWithdrawals += withdrawals;
    };

    if (totalDeposits - totalWithdrawals != balance) {
      result.push(account);
    };
  }

return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
