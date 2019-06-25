import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Modal, ModalBody, ModalFooter, ModalHeader,FormGroup, Label, Input, 
  } from 'reactstrap';
import RadioBtn from "../../../components/Switch/Switch"
import Swal from 'sweetalert2'
import { connect } from "react-redux";
import { getSelectedEntityRequest } from '../../../actions/entityAction';
import CompanyForm from '../../../components/Company/CompanyForm/CompanyForm'
import { addCompanyRequestAction, removeCompanyRequestAction, updateCompanyRequest } from '../../../actions/companyAction';

const R = require('ramda');
const data = {
        columns:
            [
                {
                    label: 'Name',
                    field: 'companyName',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Created',
                    field: 'created',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Last update',
                    field: 'lastUpdate',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Company Phone',
                    field: 'companyPhone',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Company Fax',
                    field: 'companyFax',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Website',
                    field: 'website',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Assign to',
                    field: 'adminId',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: '',
                    field: 'action',
                    align: 'center',
                    sort: 'asc',
                    width: 100
                }
            ],
        rows : [
            {
                companyName: '',
                created: '',
                lastUpdate: '',
                companyPhone: '',
                companyFax: '',
                website: '',
                adminId: '',
                action: (
                    <div className="form-inline ">
                        <i className="fas fa-pencil-alt crm_btn_table" ></i>  
                        <i className="fas fa-trash-alt crm_btn_table" ></i>  
                    </div>
                )
            },
        ]
    }

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: new Array(19).fill(false),
            test: this.props.states.tableData,
            modal: false,
            it: false,
            hospitality: false,
            retail: false,
            corporate: false,
            medical: false,
            otherIndustry: '',
        }

        this.toggle = this.toggle.bind(this);
        this.modalToggle = this.modalToggle.bind(this)
        this.onSubmitCompany = this.onSubmitCompany.bind(this)
    }
    
    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
        this.setState({
            dropdownOpen: newArray,
        });
    }

    modalToggle(i){
        this.setState({
            modal: !this.state.modal,
        });
    }

    onSubmitCompany(formDetails){
        this.props.addCompany(formDetails)

        this.setState({
            modal: !this.state.modal,
        });
    }

    componentWillMount(){
        this.props.getEntities(1)
    }
    
    render () {
        const companyData = (props) => {
            const companyData = {
                columns: data.columns,
                rows: data.rows
            }
            let list = [] 
            if (props){
                companyData.rows = []
                props.map((row, i) => {
                    if(row){
                        list = {
                            companyName: row.companyName,
                            created: row.website,
                            lastUpdate: row.lastUpdate,
                            companyPhone: row.companyPhone,
                            companyFax: row.companyFax,
                            website: row.website,
                            adminId: row.adminId,
                            action: (
                                <div className="form-inline ">
                                    <i className="fas fa-pencil-alt crm_btn_table" ></i>  
                                    <i className="fas fa-trash-alt crm_btn_table" ></i>  
                                </div>
                            )
                        }
                        companyData.rows.push(list)
                    }
                })
                return companyData
            }else{
                return companyData
            }
        }
        
        return (
            
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                        <CardHeader>
                            <strong> Company List</strong>
                            <small> </small>
                            <div className="crm-contact-options"> 
                                <div className="form-inline">
                                    <Button size="md" className="btn-brand mr-1 mb-1" onClick={this.modalToggle}><i className=" fa fa-plus"></i><span> Add Company </span></Button>
                                    <Button outline className="mr-1 mb-1" color="primary">Export</Button>
                                </div>                            
                            </div>
                        </CardHeader>
                        <CardBody>
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                data={ companyData(this.props.states.tableData) }
                            />
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={'modal-md' +this.props.className}>
                   <ModalHeader toggle={this.modalToggle}> New Company </ModalHeader>
                   <ModalBody>
                        <CompanyForm 
                            onAddCompany={this.modalToggle} 
                            setform={this.onSubmitCompany}
                        />
                   </ModalBody>
                  {/* <ModalFooter>
                    <Button color="primary" onClick={this.modalToggle}> Submit </Button>{' '}
                    <Button color="secondary" onClick={this.modalToggle}> Cancel</Button>
                  </ModalFooter> */}
                </Modal>
            </div> 
        )
    }
}

const mapStateToProps = (store) => {
    return {
      states: {
        tableData: store.entityReducer.data
      }
    }
};

const mapDispatchToProps = dispatch => ({
    getEntities: data => dispatch(getSelectedEntityRequest(0)),
    addCompany: data => dispatch(addCompanyRequestAction(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(Company)