package bankaccount;

public class bankAccount {

    private double checkingbalance = 0;
    private double savingbalance = 0;
    public static int accounts = 0;
    public static double total = 0;
    
    public bankAccount(){
        bankAccount.accounts +=1; 
        this.checkingbalance = 0;
        this.savingbalance = 0;
    }

    public double getCheckingBalance(){
        return this.checkingbalance;
    }

    public double getSavingBalance(){
        return this.savingbalance;
    }

    public void deposit(double amount, String account){
        if(account == "checking"){
            this.checkingbalance = this.checkingbalance + amount;
            bankAccount.total = total + this.checkingbalance;
        }

        if(account == "saving"){
            this.savingbalance = this.savingbalance + amount;
            bankAccount.total = total + this.savingbalance;
        }
    }

    public void withdraw(double amount, String account){
        if(account == "checking"){
            if(amount - this.checkingbalance != 0){
            this.checkingbalance = this.checkingbalance - amount;
            bankAccount.total = total - this.checkingbalance;
            }
        else{
            System.out.println("Insufficient Funds");
        }
        }

        if(account == "saving"){
            if(amount - this.savingbalance != 0){
            this.savingbalance = this.savingbalance - amount;
            bankAccount.total = total - this.savingbalance;
            }
        else{
            System.out.println("Insufficient Funds");
        }
        }
    }

    public void showBalance(){
        System.out.println("Checking Account Balance: $" + this.checkingbalance);
        System.out.println("Saving Account Balance: $" + this.savingbalance);
        System.out.println("Total Account Balance: $" + bankAccount.total);
    }
    }



