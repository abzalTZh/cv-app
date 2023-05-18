import './photoBox.scss';

function PhotoBox(props) {
    const view1 =
        <div className="app-section__panel--user">
            <img src={props.imgSrc} className="home-user-avi" alt={`${props.fullName} avatar`} />
            <h3>{props.fullName}</h3>
            {props.children}
        </div>
    const view2 =
        <div className="user-content">
            <img src={props.imgSrc} className="home-user-avi" alt={`${props.fullName} avatar`} />
            <h1>{props.fullName}</h1>
            <h2>{props.position}</h2>
            <div className="home-desc">{props.description}</div>
            {props.children}
        </div>
    if(props.position && props.description) return view2;
    else return view1;
}

export default PhotoBox;