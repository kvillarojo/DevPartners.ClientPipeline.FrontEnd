
import React from 'react'
import RadioBtn from "../../Switch/Switch"

import {
  Col,
  Row,
  FormGroup, Input, Button
} from 'reactstrap';
import AutoCompleteText from '../../AutoComplete/AutoComplete';
 
class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        firstName: "",
        lastName: "",
        position: "",
        businessEmail: "",
        personalEmail: "",
        businessPhone: "",
        mobilePhone: "",
        skype: "",
        whatsApp: "",
        homeAddress: "",
        note: "",
        isActive: true,
        createdBy: 0,
        crmContactCompanies: [],
        crmContactCompanyProjects: []  
    }

    this.leads = {
        none: false, 
        attemptedContact: false, 
        contactFuture: false, 
        contacted: false, 
        junkedLead:false, 
        lostLead: false
    }

    this.source = {
        zoomInfo: false, 
        google: false, 
        likedIn: false    
    }

    this.handleChange = this.handleChange.bind(this)
    this.onCompanChange = this.onCompanChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleRadioStates = this.handleRadioStates.bind(this)
}

handleChange(event) {
    const name =  event.target.name
    this.setState({[name]: event.target.value})
}

handleRadioStates (event) {
    this.setState(event)
}

onCompanChange(e){
    this.setState({company: e})
}

handleCompanyId(id){
    console.log(id)
}

handleSubmit = (e) => {
    e.preventDefault()
    // create restriction here before submit
    this.props.setform(this.state)
}

render() {
    let 
        fname = this.state.firstName.toLowerCase().replace(/(?<= )[^\s]|^./g, a=>a.toUpperCase()),
        lname = this.state.lastName.toLowerCase().replace(/(?<= )[^\s]|^./g, a=>a.toUpperCase()),
        address = this.state.homeAddress.toLowerCase().replace(/(?<= )[^\s]|^./g, a=>a.toUpperCase()),
        pos = this.state.position.toUpperCase()

	return (
        <div> 
            <form onSubmit={this.handleSubmit}>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Input type="text" name="firstName" placeholder="First Name" value={fname} onChange={this.handleChange}/>
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Input type="text" name="lastName" placeholder="Last Name" value={lname} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="12">
                        <FormGroup>
                            <Input type="text" name="position" placeholder="Position" value={pos} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Input type="email" name="businessEmail" placeholder="Business Email" value={this.state.businessEmail} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Input type="email" name="personalEmail" placeholder="Personal Email" value={this.state.personalEmail} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Input type="number" name="businessPhone" placeholder="Business Phone" value={this.state.businessPhone} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Input type="number" name="mobilePhone" placeholder="Mobile Phone" value={this.state.mobilePhone} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Input type="text" name="skype" placeholder="Skype" value={this.state.skype} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Input type="text" name="whatsApp" placeholder="What's App" value={this.state.whatsApp} onChange={this.handleChange} />
                        </FormGroup>
                    </Col> 
                    <Col xs="12">
                        <FormGroup>
                            <AutoCompleteText value={this.onCompanChange} companyId={this.handleCompanyId} placeholder={'Company'} list={this.props.list}/>
                        </FormGroup>
                    </Col>   
                    <Col xs="12">
                        <FormGroup>
                            <Input type="text" name="homeAddress" placeholder="Home Address" value={address} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>        
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="form-group">
                            <h4> Lead Status </h4>
                            <div  className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <RadioBtn 
                                        ischeked={this.leads.none} 
                                        willChange={(e) => {this.handleRadioStates({none: !this.leads.none})}}
                                    />
                                    <span className="crm-label"> None </span>
                                    </div>
                                    <div className="form-group">
                                    <RadioBtn 
                                        ischeked={this.leads.attemptedContact} 
                                        willChange={(e) => {this.handleRadioStates({attemptedContact: !this.leads.attemptedContact})}}
                                    />
                                    <span className="crm-label"> Attempted Contact </span>
                                    </div>
                                    <div className="form-group">
                                    <RadioBtn 
                                        ischeked={this.leads.contactFuture} 
                                        willChange={(e) => {this.handleRadioStates({contactFuture: !this.leads.contactFuture})}}
                                    />
                                    <span className="crm-label"> Contact in the Future </span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <RadioBtn 
                                            ischeked={this.leads.contacted } 
                                            willChange={(e) => {this.handleRadioStates({contacted: !this.leads.contacted})}}
                                        />
                                        <span className="crm-label"> Contacted </span>
                                    </div>
                                    <div className="form-group">
                                        <RadioBtn 
                                            ischeked={this.leads.junkedLead} 
                                            willChange={(e) => {this.handleRadioStates({junkedLead : !this.leads.junkedLead})}}
                                        />
                                        <span className="crm-label"> Junked Lead </span>
                                    </div>
                                    <div className="form-group">
                                        <RadioBtn 
                                            ischeked={this.leads.lostLead || false} 
                                            willChange={(e) => {this.handleRadioStates({lostLead : !this.leads.lostLead})}}
                                        />
                                        <span>Lost Lead </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="form-group">
                            <h4> Lead Source </h4>
                            <div  className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <RadioBtn 
                                            ischeked={this.source.zoomInfo} 
                                            willChange={(e) => {this.handleRadioStates({zoomInfo : !this.source.zoomInfo})}}
                                        />
                                        <span className="crm-label"> Zoominfo </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <RadioBtn 
                                            ischeked={this.source.google} 
                                            willChange={(e) => {this.handleRadioStates({google : !this.source.google})}}
                                        />
                                        <span className="crm-label"> Google </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <RadioBtn 
                                            ischeked={this.source.likedIn} 
                                            willChange={(e) => {this.handleRadioStates({likedIn : !this.source.likedIn})}}
                                        />
                                        <span className="crm-label"> Linked In </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <FormGroup>
                            <Input type="textarea" name="" placeholder="Add a note" value={this.state.note} onChange={this.handleChange} name="note"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-right">    
                        <Button color="primary" className="crm-btn"> Submit </Button>
                        <Button color="secondary" className="crm-btn" onClick={this.props.onAddContact}> Cancel </Button>
                    </Col>
                </Row>
            </form>
        </div>
    )
  }
}

export default ContactForm;