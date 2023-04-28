export default function Statistics({title,stats}) {
    return (
        <section className="statistics">
            {title && (<h2 className="title">{title}</h2>)}
            <ul className="stat-list">
    {stats.map(data => (
    <li className="item">
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}%</span>
    </li>
))}
  
     
  </ul>
</section>)
}