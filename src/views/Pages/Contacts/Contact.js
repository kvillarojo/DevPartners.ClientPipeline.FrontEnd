import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Modal, ModalBody, ModalHeader
  } from 'reactstrap';

import ContactForm from '../../../components/Contacts/ContactForm/ContactForm'
import { getCompanyNameList, addNewContactRequest } from '../../../actions/entityAction';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { throwStatement } from '@babel/types';



class Contact extends React.Component {
    constructor(props) {
        super(props);
    
        this.list = {
            columns:
                [
                    {
                        label: 'Name',
                        field: 'contactName',
                        sort:  'asc',
                        width: 150
                    },
                    {
                        label: 'Address',
                        field: 'address',
                        sort: 'asc',
                        width: 270
                    },
                    {
                        label: 'Business Email',
                        field: 'businessEmail',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Personal Email',
                        field: 'personalEmail',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'Mobile Phone',
                        field: 'mobilePhone',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Business Phone',
                        field: 'BusinessPhone',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: 'Lead Status',
                        field: 'status',
                        sort: 'asc',
                        width: 100
                    },
                    {
                        label: '',
                        field: 'action',
                        sort: 'asc',
                        width: 100
                    }
                ]
        }
        this.state = {
            dropdownOpen: new Array(19).fill(false),
            isModalActive: false,
            isInfo: false
        }
        
        this.toggle = this.toggle.bind(this);
        this.modalToggle = this.modalToggle.bind(this)
        this.onSubmitContact = this.onSubmitContact.bind(this)
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

        this.setState({isModalActive: !this.state.isModalActive})
        if(!this.state.isModalActive){
            this.props.getCopanyNameList(1)
        }
    }


    rowProfile(event) {
        console.log(event)
        const info = {contact_name:'John Doe', email:'john_@yahoo.com', address:'Davao city', phone:'09079242092', owner:'Admin'}
        return (
            <div className="crm_profile_modal" style={{'position': "absolute"}}>
                <div className="row">
                    <div className="col-md-6"> 
                        <div className="form-group">
                            <i className="fa fa-user"></i>
                            <label> info.contact_name </label>
                        </div>
                        <div className="form-group">
                            <i className="fa fa-mail"></i>
                            <label> info.email</label>
                        </div>
                        <div className="form-group">
                            <i className="fa fa-map"></i>
                            <label> info.address </label>
                        </div>
                        <div className="form-group">
                            <i className="fa fa-phone"></i>
                            <label> info.number </label>
                        </div>
                        <div className="form-group">
                            <i className="fa fa-plus"></i>
                            <label> Tag </label>
                        </div> 
                    </div>
                    <div className="col-md-6">
                        <label>{info.owner}</label>
                    </div>
                </div>
            </div>
        )
    }

    onSubmitContact(formData) {
        // console.clear()
        // const {crmContactCompanies,crmContactCompanyProjects,dateCreated,ateUpdated,isActive,  ...rest} = formData
        this.props.addNewContact(formData)

        this.setState({
            modal: !this.state.modal,
        });        
    }

    render () {
        const contactlist = () => {
            const data = this.props.data || []
            // console.log(data);
            const list = {
                columns: this.list.columns,
                rows: []
            }
            let item = []
            if(data.length >= 1){
                data.map((obj, i) => {
                    item = {
                        contactName: (<div className="crm-profile-link" onClick={() => this.props.isComponent(obj.contactId)}> {obj.firstName}  {obj.lastName}  </div>),
                        address: obj.homeAddress,
                        businessEmail:  obj.businessEmail,
                        personalEmail:  obj.personalEmail,
                        mobilePhone: (<a href={'tel:'+ obj.mobilePhone} > {obj.mobilePhone} </a>),
                        BusinessPhone: (<a href={'tel:'+ obj.businessPhone} > {obj.businessPhone} </a>),
                        status: obj.leadStatus,
                        action: (
                            <div className="form-inline ">
                                <i className="fas fa-pencil-alt crm_btn_table" ></i>  
                                <i className="fas fa-trash-alt crm_btn_table" ></i>  
                            </div>
                        )
                    }
    
                    list.rows.push(item)
                })  
            }
            return list
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12">
                        <Card>
                        <CardHeader>
                            <strong> Contact List </strong>
                            <small> </small>
                            <div className="crm-contact-options"> 
                                <div className="form-inline">
                                    <Button size="md" className="btn-brand mr-1 mb-1" onClick={this.modalToggle}><i className=" fa fa-plus"></i><span> Add Contacts </span></Button>
                                    <Button outline className="mr-1 mb-1" color="primary">Export</Button>
                                </div>                            
                            </div>
                        </CardHeader>
                        <CardBody>
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                data={contactlist() || []}
                            />
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
                
                <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={'modal-md ' + this.props.className}>
                  <ModalHeader toggle={this.modalToggle}> <i className="fa fa-phone"> </i> New Contact </ModalHeader>
                  <ModalBody>
                        <ContactForm 
                            list={this.props.nameList} 
                            setform={this.onSubmitContact} 
                            onAddContact={this.modalToggle}
                        />
                  </ModalBody>
                </Modal>
        
            </div> 
        )
    }
} 

const mapStateToProps = (store) => {
    return {
        nameList: store.entityReducer.list
    }
};

const mapDispatchToProps = dispatch => ({
    getCopanyNameList: data => dispatch(getCompanyNameList(data)),
    addNewContact: data => dispatch(addNewContactRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact)