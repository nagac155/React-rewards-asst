import React from 'react';
import moment from 'moment'

const RewardsReview = (props) => {
    const rows = props.list.map( item => (
        <tr key={item.date.toString()}>
         <td>{moment(item.date).format('MM/DD/YYYY')}</td>
         <td>{item.purchaseAmount}</td>
         <td>{item.rewardPoints()}</td>
        </tr>
    ));

    const month = moment(props.list[0].date).format('MMMM');
    
    const points = props.list.map( e => e.rewardPoints());
    const monthlyRewards = points.reduce((a,b) => a + b);

    return(
        <>
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
        </>
    );
};

export default RewardsReview;