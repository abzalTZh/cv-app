function Expertise(props) {
    return(
        <div className="app-section__expertise-list">
            <ul>
                {props.data.map((d, index) => (
                    <li key={index}>
                        <div className="app-section__expertise-list-date">
                            <h3>{d.info.company}</h3>
                            <span className="date">{d.date}</span>
                        </div>
                        <div className="app-section__expertise-list-info">
                            <h3>{d.info.job}</h3>
                            <span>{d.info.description}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Expertise;