function dropDown(props){

    console.log(props)
    const changeHandler = (event) => {
        props.change(event.target.value)
    }
    return(
        <>
            <select  onChange={changeHandler}>
            <option hidden disabled selected>{props.label}</option>
                {props.options.map(ele => {
                        
                    return(
                        <option key={ele.value} value={ele.value}>{ele.name}</option>
                    )
                })}
            </select>
        </>
    )

}

export default dropDown