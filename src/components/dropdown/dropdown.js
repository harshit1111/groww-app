function dropDown(props){

    const changeHandler = (event) => {
        props.change(event.target.value)
    }
    return(
        <>
            <select style={{width:"250px",borderRadius:"5px"}}  onChange={changeHandler}>
                
                {props.selected ? <option key="#" hidden selected>{props.selected.toUpperCase()}</option> :  <option hidden selected>{props.label.toUpperCase()}</option>}
                {props.options.map((ele,ind) => {
                        
                    return(
                        <option  key={ind} value={ele.value}>{ele.name.toUpperCase()}</option>
                    )
                })}
            </select>
        </>
    )

}

export default dropDown