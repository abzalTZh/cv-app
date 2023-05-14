function Box(props) {
    return(
        <section className="app-section__info-box" id={props.id}>
            <h2>{props.title}</h2>
            <div className="app-section__info-box--content">
                {props.content}
            </div>
            {props.children}
        </section>
    )
}

export default Box;