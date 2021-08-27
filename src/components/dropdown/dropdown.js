function dropDown(props){

    const changeHandler = (event) => {
        props.change(event.target.value)
    }
    return(
        <>
            <select style={{width:"150px"}} defaultValue="jajaj" placeholder="jajaj" onChange={changeHandler}>
                
                {props.selected ? <option hidden selected>{props.selected.toUpperCase()}</option> :  <option hidden selected>{props.label.toUpperCase()}</option>}
                {props.options.map(ele => {
                        
                    return(
                        <option  key={ele.value} value={ele.value}>{ele.name.toUpperCase()}</option>
                    )
                })}
            </select>
        </>
    )

}

export default dropDown