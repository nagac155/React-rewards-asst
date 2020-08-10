
type Trans = {
	date: object,
	purchaseAmount: number,
	rewardPoints: Function
}

let data: Array<any> = [];

const list = ():Array<Trans[]> => {
    data = [];
	getList();
	return monthlyRecords();
}


const addPurchaseHistory = (d: string, p: number): void => {
	const da = new (Transaction as any)(d, p);
	data.push(da);
}

const getList = (): void => {
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

const monthlyRecords = (): Array<Trans[]> => {
	let threeMonthRecords = [];
	for(let i =0; i<3; i++) {
		let oneMonthList = data.filter(item => !!item && item.date.getMonth() === (new Date()).getMonth() - i);
		threeMonthRecords[i] = !!oneMonthList && oneMonthList.sort((a, b) => a.date - b.date);
	}
	return threeMonthRecords;
}

function Transaction(this: Trans,  date: string, purchaseAmount: number): void {
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