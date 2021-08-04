package bankaccount;

public class bankAccountTest {
    public static void main(String[] args) {
        bankAccount b = new bankAccount();
        b.getCheckingBalance();
        b.getSavingBalance();
        b.deposit(10000, "checking");
        b.deposit(10000, "saving");
        b.showBalance();
        b.withdraw(10000, "checking");
        b.withdraw(500, "checking");
        b.showBalance();
        b.withdraw(10000, "saving");
        b.withdraw(500, "saving");
        b.showBalance();
    }
}

