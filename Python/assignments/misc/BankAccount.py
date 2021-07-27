class BankAccount:
    bank_name = "First National Dojo"
    all_accounts = []
    def __init__(self, name,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        self.name = name
        BankAccount.all_accounts.append(self)
    @classmethod
    def change_bank_name(cls,name):
        cls.bank_name = name
    @classmethod
    def all_balances(cls):
        sum = 0
        # we use cls to refer to the class
        for account in cls.all_accounts:
            sum += account.balance
        return sum
    @staticmethod
    def can_withdraw(balance,amount):
        if (balance - amount) < 5:
            return False
        else:
            return True
        
    def with_draw(self,amount):
        if BankAccount.can_withdraw(self.balance,amount):
            self.balance -= amount
        else:
            print("Insufficient Funds")
        return self  
    def deposit(self,amount):
        self.balance += amount
        return self
    def yeild_intrest(self):
        self.balance = self.balance * (self.int_rate +1)
        return self
    def display_account_info(self):
        print(self.name,self.int_rate,self.balance)



Zack = BankAccount("Zack", .1, 3000 )
Zack.deposit(10000).deposit(2000).deposit(3000).with_draw(2000).yeild_intrest().display_account_info()


Miles = BankAccount("Miles", .01, 3000 )
Miles.deposit(3000).deposit(100000).with_draw(900).with_draw(100).with_draw(2000).yeild_intrest().display_account_info()


