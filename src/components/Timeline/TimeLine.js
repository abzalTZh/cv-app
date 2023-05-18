import Info from "../Info/Info";
import './timeline.scss'

function TimeLine(props) {
    return(
        <div className="app-section__timeline">
            <ul>
                {props.data.map((d, index) => (
                    <li key={index}>
                        <div className="app-section__timeline-list-date">
                            {d["date"]}
                        </div>
                        <div className="app-section__timeline-list-event">
                            <Info text={d["text"]}>
                                <h3>{d["title"]}</h3>
                            </Info>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TimeLine;