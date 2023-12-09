const Statistics = ({title, stats}) => {
    const resultStats = stats.map(({ id, label, percentage, }) => (
        <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
     ))
    
    return ( <section className="statistics">
        {title !== undefined && (<h2 className="title">{title}</h2>)}
          <ul className="stat-list">
            {resultStats}
          </ul>
      </section>)
}

export default Statistics;