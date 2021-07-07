class User: 
    def __init__(self,name,email) -> None:
        self.name = name
        self.email = email 
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawl(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print(self.name,self.account_balance)
        return self
    def transfer_money(self,other_user,amount):
        transfer = amount
        self.account_balance = self.account_balance - transfer
        self = other_user
        self.account_balance = self.account_balance + transfer


Zack = User("Zack","Zrice")
Sarah = User("Sarah","Swilson")
Miles  = User("Miles","Mstrickler")

Zack.make_deposit(100000).make_deposit(300000).make_deposit(100).make_withdrawl(9000).display_user_balance()

Sarah.make_deposit(3000)
Sarah.make_deposit(4000)
Sarah.make_withdrawl(900)
Sarah.make_withdrawl(90)
Sarah.display_user_balance()


Miles.make_deposit(100000)
Miles.make_withdrawl(10)
Miles.make_withdrawl(20)
Miles.make_withdrawl(70)
Miles.display_user_balance()


Zack.transfer_money(Miles,100)

Miles.display_user_balance()