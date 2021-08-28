import classes from './table.module.css'

function table (props) {

    return(
        <table className={classes.table}>
          <thead>
            <tr>
            {props.headers.map(header => {
                return(
                    <th width={header.width}>{header.content}</th>
                )

            })}
            </tr>
          </thead>

          <tbody>
            {props.currentPageBanks.map((bank, id) => {
              return (
                <tr
                  className={classes.row}
                  key={id}
                  onClick={() => props.fullDetailsHandler(bank.ifsc)}
                >
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