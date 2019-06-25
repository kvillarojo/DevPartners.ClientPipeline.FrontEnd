import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {CompanyProfile} from '../Company/CompanyProfile/CompanyProfile'
import {ContactProfile} from '../Contacts/ContactProfile/ContactProfile'
import {CompanyUpdate} from '../Company/CompanyProfile/CompanyUpdate'
import Note from '../../components/Contacts/Note/Note'
import Swal from 'sweetalert2'



const R = require('ramda');
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});


class  CompanyTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isProfileshow: false,
            isNoteModal: false,
            profileData: [],
            showProfileUpdate: false

        }

        this.handleShowProfile = this.handleShowProfile.bind(this);
        this.escFunction = this.escFunction.bind(this);
        this.eachTablContent = this.eachTablContent.bind(this)
        this.showNoteModal = this.showNoteModal.bind(this)
        this.onUpdateProfile = this.onUpdateProfile.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    handleShowProfile(id) {
        const {isProfileshow, rows } = this.state
        var hasID = R.propEq('companyId', id);
        const profData = R.filter(hasID)(this.props.data)
        this.setState({profileData: profData}) 
        this.setState({isProfileshow:!isProfileshow})
    }
 
    onUpdateProfile() {
        this.setState({showProfileUpdate: true, isProfileshow: false})
    }

    onCancel() {
        this.setState({showProfileUpdate: false})
        this.getIntityDetails()
    }
    
    

    setableThead () {
        const {tableID } = this.props
        if(tableID == 0){
            
            return [ 
                'Name',
                'Created',
                'Last update',
                'Business Email',
                'Personal Email',
                'Mobile Phone',
                'Business Phone',
                ''
            ]
        }else if (tableID == 1){
            
            return [
                'Name',
                'Created',
                'Last update',
                'Company Phone',
                'Company Fax',
                'Website',
                'Assign to',
                ''
            ]
        }else{
            return [
                'Description',
                'Probability',
                'Stage',
                'Responsible',
                'Status',
                'Event Date',
                'Event',
                ''
            ]
        }
    }
    
    removefile(id){
        Swal.fire({
            title: 'Remove this company?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Remove!'
          }).then((result) => {
            if(result.value){
                this.props.company(id)
                this.getIntityDetails()
            }
        })
    }

    escFunction(event){
        if(event.keyCode === 27) {
            this.setState({isProfileshow:false});
        }
    }
    
    eachTableHeadTitle (rowname, i) {
        return (
            <TableCell key={i}> {rowname} </TableCell>
        )
    }

    getIntityDetails(){
        this.props.action(this.props.id)
    }

    eachTablContent (row, i) {
        const { tableID } = this.props
        
        if(tableID == 0){
            return  (
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
                            <i className="fas fa-pencil-alt crm_btn_table" onClick={(e) => this.handleShowProfile(row.companyId)}></i>  
                            <i className="fas fa-trash-alt crm_btn_table"></i>  
                        </div>
                    </TableCell>
                </TableRow>
            )
        }else if (tableID == 1){
            return  (
                <TableRow key={i}>
                    <TableCell component="th" scope="row">
                        {row.companyName}
                    </TableCell>
                    <TableCell >{row.lastUpdate}</TableCell>
                    <TableCell >{row.created}</TableCell>
                    <TableCell ><a href={"tel:"+ row.companyPhone}> {row.companyPhone} </a> </TableCell>
                    <TableCell ><a href={"tel:"+ row.companyFax}> {row.companyFax} </a></TableCell>
                    <TableCell >{row.website}</TableCell>
                    <TableCell >{row.adminId}</TableCell>
                    <TableCell >
                        <div className="crm_table form-inline ">
                            <i className="fas fa-pencil-alt crm_btn_table" onClick={(e) => this.handleShowProfile(row.companyId)}></i>  
                            <i className="fas fa-trash-alt crm_btn_table" onClick={(e) => this.removefile(row.companyId)}></i>  
                        </div>
                    </TableCell>
                </TableRow>
            )
        }else{
            return  (
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
                            <i className="fas fa-pencil-alt crm_btn_table" onClick={(e) => this.handleShowProfile(row.companyId)}></i>  
                            <i className="fas fa-trash-alt crm_btn_table"></i>  
                        </div>
                    </TableCell>
                </TableRow>
            )
        }
    }

    showNoteModal(event){
        this.setState(event)
    }

    showProfile(){
        const { tableID } = this.props
        const { profileData } = this.state

        if(tableID == 0) {
            return (<ContactProfile data={profileData} note={this.showNoteModal}/>)
        }else if(tableID == 1){
            return (
                <CompanyProfile data={profileData} update={this.onUpdateProfile}/>)
        }else{
            return (<CompanyProfile data={profileData} />) 
        }
    }
   
    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
    }
    
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }
  
    render () {
        // const { headTitle , rows , isProfileshow, profileData} = this.state
        const tableTHead = this.setableThead(this.props.tableID)
        const data  = this.props.data || []
        // console.log(data)
        return (
            <Paper>
                <Table >
                    <TableHead className="crm_table_head">
                    <TableRow>
                        { tableTHead.map(this.eachTableHeadTitle) }
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    { data.map(this.eachTablContent) }
                    </TableBody>
                </Table>
                {this.state.isProfileshow &&
                    this.showProfile()
                }
                {this.state.isNoteModal &&
                    <Note setVisibility={this.showNoteModal}/>
                }
                {this.state.showProfileUpdate &&
                    <CompanyUpdate 
                        data={this.state.profileData[0]} 
                        cancel={this.onCancel} 
                        update={this.props.update}
                        getDetails={this.getIntityDetails}
                    />
                }
            </Paper>
        );
    }
}

export default CompanyTable;