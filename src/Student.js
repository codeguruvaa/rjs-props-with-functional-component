
function Student(props) {

    console.log(props)

    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Hello {props.name}</h1>
            <h2>EMail {props.email}</h2>
        </div>
    )
}

export default Student