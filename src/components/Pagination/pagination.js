import classes from "./pagination.module.css";

function Pagination(props){

    const currentPageNumber = props.currentPageNumber;
    const totalPages = props.totalPages;

    console.log(currentPageNumber)



    return(
        <div className="mt-3 d-flex justify-content-center align-items-center">
            
            <button disabled={!currentPageNumber} className={classes.button}  onClick={() => props.change(currentPageNumber-1)}>previous</button>
            <span>{currentPageNumber + 1}</span>
            <button disabled={currentPageNumber == totalPages}  className={classes.button}    onClick={() => props.change(currentPageNumber+1)}>next</button>
        </div>
    )

}

export default Pagination