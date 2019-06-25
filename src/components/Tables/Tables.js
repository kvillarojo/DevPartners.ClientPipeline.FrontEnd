import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CompanyProfile from '../Company/CompanyProfile/CompanyProfile'
// const R = require('ramda');
import R from 'ramda'


export const ContactTable = (props) => {

    const rows = props.data || []
    const headTitle = [
        'Name',
        'Created',
        'Last update',
        'Business Email',
        'Personal Email',
        'Mobile Phone',
        'Business Phone',
        ''
    ]
 
    return (
        <Paper>
            <Table>
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
                    <TableRow key={row.companyID}>
                        <TableCell key={i} component="th" scope="row">
                            {row.companyName}
                        </TableCell>
                        <TableCell key={i} >{row.created}</TableCell>
                        <TableCell key={i} >{row.lastUpdate}</TableCell>
                        <TableCell key={i} >{row.numberOfEmployee}</TableCell>
                        <TableCell key={i} >{row.protein}</TableCell>
                        <TableCell key={i} >{row.protein}</TableCell>
                        <TableCell key={i} >{row.protein}</TableCell>
                        <TableCell key={i} >
                            <i class="fas fa-pencil-alt crm_btn_table"></i>  
                            <i class="fas fa-trash-alt crm_btn_table"></i>  
                        </TableCell>
                    </TableRow>
                ))} */}
                </TableBody>
            </Table>
        </Paper>
    );
}

export const CompanyTable = (props) => {
    const rows = props.data || []
    const headTitle = [
        'Name',
        'Created',
        'Last update',
        'Company Phone',
        'Company Fax',
        'Website',
        'Assign to',
        ''
    ];
  
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
                {rows.map((row, i) => (
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
                ))}
                </TableBody>
            </Table>
        </Paper>
    );
}


export const ProjectTable = (props) => {

    const rows = props.data || []
    const headTitle = [
        'Description',
        'Probability',
        'Stage',
        'Responsible',
        'Status',
        'Event Date',
        'Event',
        ''
    ]

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
                {/* {rows.map(row => (
                    <TableRow key={row.companyName}>
                    <TableCell component="th" scope="row">
                        {row.companyPhone}
                    </TableCell>
                    <TableCell >{row.lastUpdate}</TableCell>
                    <TableCell >{row.created}</TableCell>
                    <TableCell >{row.numberOfEmployee}</TableCell>
                    <TableCell >{row.protein}</TableCell>
                    <TableCell >{row.protein}</TableCell>
                    <TableCell >{row.protein}</TableCell>
                    <TableCell key={i} > <i class="fas fa-pencil-alt"></i>  &amp; <i class="fas fa-trash-alt"></i>  </TableCell>
                    </TableRow>
                ))} */}
                </TableBody>
            </Table>
        </Paper>
    );
}
