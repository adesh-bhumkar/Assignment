/* Assignment-3 (Conditional Statements)

A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
o If the credit score is above 750, the loan is automatically approved.
o If the credit score is between 650 and 750, additional checks are performed.
o If the credit score is below 650, the loan is denied.
2. Income:
o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.

3. Employment Status:
o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
o If the customer is unemployed, the loan is denied.
4. Debt-to-Income Ratio:
o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
o If the DTI ratio is less than 40%, the loan is approved.
o If the DTI ratio is 40% or greater, the loan is denied.

Create common function and then based on below details, print whether user is eligible to get the loan
or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0; */

type LoanInput = {
  creditScore: number;
  income: number;
  employeeStatus: boolean;
  debtRatio: number;
};

function loanAppli(data: LoanInput): string {
  const { creditScore, income, employeeStatus, debtRatio } = data;

  if (creditScore > 750) {
    return "Loan Approved";
  } 
  else if (creditScore >= 650) {

    if (income >= 50000 && employeeStatus && debtRatio <= 40) {
      return "Congratulations! Loan is approved";
    }
    return "Loan Denied due to income, employment, or high debt ratio";
  } 
  else {
    return "Loan Denied";
  }
}

// 👉 Input object
const applicant: LoanInput = {
  creditScore: 710,
  income: 55000,
  employeeStatus: true,
  debtRatio: 38
};

console.log(loanAppli(applicant));



