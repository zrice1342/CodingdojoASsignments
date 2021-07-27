class BankAccount:
    bank_name = "First National Dojo"
    all_accounts = []
    def __init__(self,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
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



class User:
    def __init__(self,name,email):
        self.name = name
        self.emial = email
        self.account = BankAccount(int_rate=.02,balance=0)
    def with_draw(self,amount):
        if BankAccount.can_withdraw(self.account.balance,amount):
            self.account.balance -= amount
        else:
            print("Insufficient Funds")
        return self  
    def deposit(self,amount):
        self.account.balance += amount
        return self
    def yeild_intrest(self):
        self.account.balance = self.balance * (self.int_rate +1)
        return self
    def display_account_info(self):
        print(self.name,self.account.int_rate,self.account.balance)

Zack = User("Zack","Zrice@gmnail.com")

Zack.deposit(1000).with_draw(500).display_account_info()
print(Zack.name)
