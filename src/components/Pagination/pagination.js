import classes from "./pagination.module.css";

function Pagination(props){

    const currentPageNumber = props.currentPageNumber;
    const totalPages = props.totalPages;

    return(
        <div className={`${classes.pagination} mt-3 d-flex justify-content-center flex-column align-items-center`}>
            <div>
                Displaying {currentPageNumber + 1} of {props.totalPages + 1}
            </div>
            <div>
            <button disabled={!currentPageNumber} className={classes.button}  onClick={() => props.change(currentPageNumber-1)}>previous</button>
            <button disabled={currentPageNumber == totalPages}  className={classes.button}    onClick={() => props.change(currentPageNumber+1)}>next</button>
            </div>

            
        </div>
        
    )

}

export default Pagination