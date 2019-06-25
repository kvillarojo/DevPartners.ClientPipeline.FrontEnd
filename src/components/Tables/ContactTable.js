import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import R from 'ramda'

class  ContactTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rows: props.data,
            headTitle: [
                'Name',
                'Created',
                'Last update',
                'Business Email',
                'Personal Email',
                'Mobile Phone',
                'Business Phone',
                ''
            ],
            isProfileshow: false,
            profileData: []
        }
    }
  
    render () {
        const { headTitle , rows , isProfileshow, profileData} = this.state
        return (
            <Paper>
                <Table >
                    <TableHead className="crm_table_head">
                    <TableRow>
                        {
                            headTitle.map((rowname, i) =>
                                <TableCell key={i}> {rowname} </TableCell>
                            )
                        }
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {rows.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {row.companyName}
                            </TableCell>
                            <TableCell >{row.lastUpdate}</TableCell>
                            <TableCell >{row.created}</TableCell>
                            <TableCell >{row.companyPhone}</TableCell>
                            <TableCell >{row.companyFax}</TableCell>
                            <TableCell >{row.website}</TableCell>
                            <TableCell >{row.adminId}</TableCell>
                            <TableCell >
                                <div className="crm_table form-inline ">
                                    <i className="fas fa-pencil-alt crm_btn_table"></i>  
                                    <i className="fas fa-trash-alt crm_btn_table"></i>  
                                </div>
                            </TableCell>
                        </TableRow>
                    ))} */}
                    </TableBody>
                </Table>
                
            </Paper>
        );
    }
}

export default ContactTable;