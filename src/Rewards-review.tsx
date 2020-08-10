import React from 'react';
import moment from 'moment';
import styled from "styled-components";

const StyledTable = styled.div`
    border: 1px solid black;
    margin: 5px;

    h2 {
        text-align: center;
        background-color: #F1F1F1;
        margin: 4px 0px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        border-bottom: 30px;
    }

    th {
        background-color: #4CAF50;
        color: white;
    }
    th, td {
        border: 2px solid #ddd;
        padding: 2px 20px;
    }

    tfoot {
        font-weight: 700;
    }

`;

type Transaction = {
	date: object,
	purchaseAmount: Number,
	rewardPoints: Function
}

type Props = {
    list: Array<Transaction>
}

const RewardsReview = (props: Props): JSX.Element => {
    const rows = props.list.map( (item: Transaction) => (
        <tr key={item.date.toString()}>
         <td>{moment(item.date).format('MM/DD/YYYY')}</td>
         <td>{item.purchaseAmount}</td>
         <td>{item.rewardPoints()}</td>
        </tr>
    ));

    const month: String = moment(props.list[0].date).format('MMMM');
    
    const points: Array<number> = props.list.map( (e: Transaction) => e.rewardPoints());
    const monthlyRewards: Number = points.reduce((a: number, b: number) => a + b);

    return(
        <StyledTable>
            <h2>Month of: {month}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Rewards</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{monthlyRewards}</td>
                    </tr>
                </tfoot>
            </table>
        </StyledTable>
    );
};

export default RewardsReview;