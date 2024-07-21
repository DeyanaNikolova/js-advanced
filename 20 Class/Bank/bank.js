class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.transactions = [];
    }

    newCustomer(customer) {
        let sameCustomer = this.allCustomers.find(c => c.firstName == customer.firstName)

        if (sameCustomer) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        let newCustomer = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            personalId: customer.personalId,
        }
        this.allCustomers.push(newCustomer);
        return newCustomer;
    }

    depositMoney(personalId, amount) {

        let customer = this.allCustomers.find(x => x.personalId == personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (customer.type == undefined) {

            customer.totalMoney = amount;
            customer.number = 1;
            customer.moneyIn = amount,
            customer.type = 'deposit';
            this.transactions.push(`${customer.number}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        } else {

            customer.moneyIn = amount;
            customer.totalMoney += amount;
            customer.number++;

            this.transactions.push(`${customer.number}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);
        }
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {

        let customer = this.allCustomers.find(x => x.personalId == personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }
        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }
        customer.totalMoney -= amount;
        customer.moneyOut = amount;
        customer.type = 'withdraw';
        customer.number++;
        this.transactions.push(`${customer.number}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
        return `${customer.totalMoney}$`
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(x => x.personalId == personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        result.push(`Customer ID: ${customer.personalId}`);
        result.push(`Total Money: ${customer.totalMoney}$`);
        result.push(`Transactions:`);
        let transaction = []
        for (let trans of this.transactions) {
            if (trans.includes(customer.firstName)) {

                transaction.unshift(trans);
            }
        }
        transaction.forEach(x => {
            result.push(x);
        });
        return result.join('\n');
    }
}


let bank = new Bank('SoftUni Bank');


console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
//console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
