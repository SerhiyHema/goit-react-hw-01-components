const TransactionHistory = ({items}) => {
    const resultItems = items.map(({id, type, amount, currency}) => (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    ))

return (<section className="transaction">
         <table className="transaction-history">
           <thead>
             <tr>
             <th>Type</th>
             <th>Amount</th>
             <th>Currency</th>
             </tr>
           </thead>
           <tbody>
             {resultItems}
           </tbody>
         </table>
       </section>)

}

export default TransactionHistory;