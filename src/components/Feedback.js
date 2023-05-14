import Info from './Info';

function Feedback(props) {
    return(
        <div className="app-section__feedback">
            <ul>
                {props.data.map((d, index) => (
                    <li key={index}>
                        <Info text={d.feedback} />
                        <div className="app-section__feedback-reporter">
                            <img 
                                src={d.reporter.photoUrl} 
                                alt={`${d.reporter.name} headshot`} />
                            <cite>
                                {"A Game of Thrones, "}
                                <a href={d.reporter.citeUrl}>
                                    {d.reporter.citeUrl.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0]}
                                </a>
                            </cite>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Feedback;