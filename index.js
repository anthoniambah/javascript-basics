// a function that returns bank account information, with the information as an object.
function getAccountInfo(firstName, middleName, lastName, balance) {
  const accountDetails = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    balance: balance,
  };
  return accountDetails;
}

const accountInfo = getAccountInfo("Anthonia", "Chinenye", "Mbah", "$5,000");
console.log(accountInfo);
