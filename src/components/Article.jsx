function Article(props) {
    
    return (
        <>
            <p>Id: { props.id }</p>
            {/* <p>User id: { props.userid }</p> */}
            <h3 className="text-xl font-bold">Title: { props.title }</h3>
            <p>Body: { props.body }</p>
        </>
    )
}

export default Article