import classes from './table.module.css'

function table (props) {

    return(
        <table className={classes.table}>
          <thead>
            <tr>
            <th width="5%">#</th>
            {props.headers.map((header,i) => {
                    
                return(
                    <th key={i} width={header.width}>{header.content}</th>
                )

            })}
            </tr>
          </thead>

          <tbody>
            {props.currentPageBanks.map((bank, index) => {
              return (
                <tr
                  className={classes.row}
                  key={index}
                  onClick={() => props.fullDetailsHandler(bank.ifsc)}
                >
                    <td>{props.pageNumber*10 + index+1}</td>
                  <td>{bank.bank_id}</td>
                  <td> {bank.bank_name}</td>
                  <td>{bank.ifsc}</td>
                  <td>{bank.branch}</td>
                  <td className={classes.text}>{bank.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    )
}

export default table