class Bank{
    // Properties of the class
    accountNumber:number;
    accountName: string;
    accountBalance:number;
    // Contructor of the class
    constructor(accountNumber:number,accountName: string, accountBalance:number){
        this.accountNumber = accountNumber
        this.accountName= accountName
        this.accountBalance = accountBalance
    }
    // Methods of the class
    deposit(amount: number): void{
        if(amount>0){
            this.accountBalance +=amount
            console.log('Deposit successful');            
        }else{
            console.log('Invalid amount');            
        }
    }
    withdraw(amount: number):void{
        if(this.accountBalance>=amount){
            this.accountBalance -=amount;
            console.log('Withdrawal successful');            
        }else{
            console.log('Insufficiant balance');            
        }
    }
    displayBalance():void{
        console.log(`${this.accountName}-${this.accountNumber} balance is ${this.accountBalance}`);        
    }
}
const obj = new Bank(101,'John Peter', 1000)
obj.displayBalance()
obj.deposit(100)
obj.displayBalance()
obj.withdraw(500)
obj.displayBalance()