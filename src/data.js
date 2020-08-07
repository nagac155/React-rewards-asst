let data = [];
const list = () => {
    data = [];
	getList();
	return monthlyRecords(); //returns  [[], [], []]
}


const addPurchaseHistory = (d, p) => {
 const da = new Transaction(d, p);
 data.push(da);
}

const getList = () => {
	addPurchaseHistory('2020-06-01', 40);
	addPurchaseHistory('2020-07-04', 50);
	addPurchaseHistory('2020-08-05', 60);
	addPurchaseHistory('2020-06-08', 70);
	addPurchaseHistory('2020-07-14', 80);
	addPurchaseHistory('2020-08-02', 90);
	addPurchaseHistory('2020-06-19', 100);
	addPurchaseHistory('2020-07-30', 110);
	addPurchaseHistory('2020-06-21', 120);
	addPurchaseHistory('2020-07-23', 130);
}

const monthlyRecords = () => {
	let threeMonthRecords = [];
	for(let i =0; i<3; i++) {
		let oneMonthList = data.filter(data => data.date.getMonth() === (new Date()).getMonth() - i);
		threeMonthRecords[i] = oneMonthList;
	}
	return threeMonthRecords;
}

function Transaction(date, purchaseAmount) {
    this.date = new Date(date);
    this.purchaseAmount = purchaseAmount;
    this.rewardPoints = () => {
        if (this.purchaseAmount >=50 && this.purchaseAmount <= 100) {
            return this.purchaseAmount-50;
        } else if (this.purchaseAmount >100){
            return (2*(this.purchaseAmount-100) + 50);
        }
        return 0;
    };
}

export default list;