import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Nav, NavItem, NavLink, TabPane, TabContent
  } from 'reactstrap';

import Avatar from 'react-avatar';
  
class ContactProfile extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
            activeTab: new Array(2).fill('1'),
        }
       
        this.toggle = this.toggle.bind(this);
    }

    notes = () => {
        // return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
        return (
            <>
                <div className="crm-tab-options text-right"> 
                    <i className="fa fa-plus-circle"> </i>
                </div>
                <div className="crm-note-list">
                    {this.noteList()}
                </div>
            </>
        )
    }

    timeline = () => {
        return ( 
            <Row>
                <Col md={6}>
                    <div className="form-inline"> 
                        <label className="crm-label"> Created: </label>
                        <span> {this.props.profile.dateCreated} </span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="form-inline"> 
                        <label className="crm-label"> Last updated: </label>
                        <span>  {this.props.profile.dateUpdated} </span>
                    </div>
                </Col>
            </Row>
        )
    } 
    noteList = () => {
        const note = this.props.profile.note
        
        if(note){
            return ( <p>{note}</p> )
        }else{
            return ( <span className="crm-empty-label">Empty...</span> )
        }
    } 

    toggle = (tabPane, tab) => {
        const newArray = this.state.activeTab.slice()
        newArray[tabPane] = tab
        this.setState({
          activeTab: newArray,
        });
    }
    
    tabPane = () => {
        return (
          <>
            <TabPane tabId="1">
              { this.timeline() }        
            </TabPane>
            <TabPane tabId="2">
              { this.notes() }        
            </TabPane>
          </>
        );
    }

    render () {
        // console.log(this.props)
        const n = this.props.profile
        console.log(this.props)
        const contactName = n.firstName + ' ' + n.lastName

        return (
            <>    
                <span  className="fa fa-arrow-left" onClick={() => this.props.isComponent(undefined)}></span> 
                <div className="animated fadeIn">
                    <Row>
                        <Col xs="3" sm="3">
                            <Card>
                            <CardHeader>
                                <span className="fa fa-pencil crm-profule-update"></span>
                                <div className="crm-profile-pic">
                                    <Avatar 
                                        name={contactName}
                                        round="90px"
                                        size={125}
                                    />
                                    <div className="crm-container-topName ">
                                    <h2> {contactName} </h2>
                                    </div>
                                    <span> {n.position} </span>    
                                    <br/>
                                    <h4> {n.company} </h4>     
                                </div>
                                <hr/>
                                <div className="crm-profile-status red">
                                    <span className="crm-label"> Lead Status: </span> {n.leadStatus}
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="form-inline">
                                    <span className="crm-label">
                                        Owner: 
                                    </span>
                                    {n.createdBy}
                                </div>
                                <hr/>
                                <div className="form-group">
                                    <h4>
                                        Tags
                                    </h4>
                                    <div className="crm-tag-list">
                                        <span className="fa fa-plus-circle crm-label"> tag </span>
                                    </div> 
                                </div>
                                <h4 >
                                    Contact Information
                                </h4>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <span className="crm-label">
                                                Business Phone #:
                                            </span>
                                            <br/>
                                            <label> <a href={`tel:${n.businessPhone}`}>  {n.businessPhone} </a> </label>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <span className="crm-label">
                                                Personal Phone #:
                                            </span>
                                            <br/>
                                            <label> <a href={`tel:${n.mobilePhone}`}>  {n.mobilePhone} </a> </label>
                                        </div>
                                    </Col>                       
                                </Row>
                                <div className="form-group">
                                    <span className="crm-label">
                                        Business Email
                                    </span>
                                    <br/>
                                    <label> <a href={`mailto:`+ n.personalEmail}> {n.personalEmail} </a></label>
                                </div>
                                <div className="form-group">
                                    <span className="crm-label">
                                        Personal Email
                                    </span>
                                    <br/>
                                    <label> <a href={`mailto:`+ n.businessEmail}> {n.businessEmail} </a></label>
                                </div>
                                <h4 >
                                    Address
                                </h4>
                                <div className="form-group">
                                    <p>  {n.homeAddress} </p>
                                </div>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col xs="9" sm="9">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        active={this.state.activeTab[0] === '1'}
                                        onClick={() => { this.toggle(0, '1'); }}
                                        >
                                        Timeline
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        active={this.state.activeTab[0] === '2'}
                                        onClick={() => { this.toggle(0, '2'); }}
                                        >
                                        Notes
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab[0]}>
                                {this.tabPane()}
                            </TabContent>
                        </Col>
                    </Row>
                </div> 
            </>
        )
    }
} 

 
export default ContactProfile