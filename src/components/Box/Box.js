import './box.scss'

function Box(props) {
    return(
        <section className="app-section__info-box" id={props.id}>
            <div className='app-section__info-box--container'>
                <h2>{props.title}</h2>
                <div className="app-section__info-box--content">
                    {props.content}
                </div>
            </div>
            
            {props.children}
        </section>
    )
}

export default Box;