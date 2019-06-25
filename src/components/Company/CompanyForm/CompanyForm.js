
import React from 'react'
import RadioBtn from "../../Switch/Switch"
import {
  Button,
  Col,
  Row,
  FormGroup, Input, 
} from 'reactstrap';
import './Company.scss'
import { throwStatement } from '@babel/types';

class CompanyForm extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      companyPhone: "",
      companyFax: "",
      website: "",
      companyAddress: "",
      numberOfEmployee: 0,
      annualRevenue: 0,
      paymentDetails: "",
      createdBy: 0,
      isActive: true,
      crmContactCompanies: [],
      crmContactCompanyProjects: []
    }
  

    this.industry = {
      activeIndustry: '',
      others: false,
      it: false,
      hospitality: false,
      retail: false,
      corporate: false,
      medical: false,
      otherIndustry: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInpuChange = this.handleInpuChange.bind(this)
    this.getIndustry = this.getIndustry.bind(this)
  }

  updateIndusryStates(){
    this.setState({
      it: 0, 
      hospitality: 0, 
      retail: 0, 
      corporate: 0, 
      medical: 0
    })
  }

  handleInpuChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  setIdustryStates(event) {
    // console.log(event)
    this.setState(event)
  }

  getIndustry(e) {
    this.setState({otherIndustry: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    // create restrictions in the future
    this.props.setform(this.state)
  }

  render() {
	  return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
              <Col xs="12">
                  <FormGroup>
                      <Input 
                        type="text" 
                        name="companyName" 
                        onChange={this.handleInpuChange} 
                        value={this.state.companyName} 
                        onChange={this.handleInpuChange} 
                        placeholder="Company Name" 
                      />
                  </FormGroup>
              </Col>
              <Col xs="6">
                  <FormGroup>
                      <Input 
                        type="text" 
                        name="companyPhone" 
                        onChange={this.handleInpuChange} 
                        value ={this.state.companyPhone} 
                        placeholder="Companny Phone" 
                      />
                  </FormGroup>
              </Col>
              <Col xs="6">
                  <FormGroup>
                      <Input 
                        type="text" 
                        name="companyFax"  
                        onChange={this.handleInpuChange} 
                        value={this.state.companyFax}
                        placeholder="Company Fox" 
                      />
                  </FormGroup>
              </Col>
              <Col xs="12">
                  <FormGroup>
                      <Input 
                        type="text" 
                        name="website" 
                        onChange={this.handleInpuChange} 
                        value={this.state.website} 
                        placeholder="Website" 
                      />
                  </FormGroup>
              </Col>
              <Col xs="12">
                  <FormGroup>
                      <Input 
                        type="text" 
                        name="companyAddress" 
                        onChange={this.handleInpuChange} 
                        value={this.state.companyAddress} 
                        placeholder="Company Address" 
                      />
                  </FormGroup>
              </Col>
              <Col xs="6">
                  <FormGroup>
                      <Input 
                        type="number" 
                        name="numberOfEmployee" 
                        onChange={this.handleInpuChange} 
                        value={this.state.numberOfEmployee} 
                        placeholder="number of employee" 
                      />
                  </FormGroup>
              </Col>                    
          </Row>
          <Row>
              <Col xs={12}>
                  <div className="form-group">
                      <h4> Industry </h4>
                      <div  className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                              <RadioBtn 
                                  ischeked={this.industry.it} 
                                  willChange={(e) => {this.setIdustryStates({it : !this.industry.it})}}
                              />
                              <span className="crm-label"> IT </span>
                              </div>
                              <div className="form-group">
                              <RadioBtn 
                                  ischeked={this.industry.hospitality} 
                                  willChange={(e) => {this.setIdustryStates({hospitality : !this.industry.hospitality})}}
                              />
                              <span className="crm-label"> Hospitality </span>
                              </div>
                              <div className="form-group">
                              <RadioBtn 
                                  ischeked={this.industry.retail} 
                                  willChange={(e) => {this.setIdustryStates({retail : !this.industry.retail})}}
                              />
                              <span className="crm-label"> Retail </span>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                              <RadioBtn 
                                  ischeked={this.industry.corporate} 
                                  willChange={(e) => {this.setIdustryStates({corporate : !this.industry.corporate})}}
                              />
                              <span className="crm-label"> Corporate </span>
                              </div>
                              <div className="form-group">
                              <RadioBtn 
                                  ischeked={this.industry.medical} 
                                  willChange={(e) => {this.setIdustryStates({medical : !this.industry.medical})}}
                              />
                              <span className="crm-label"> Medical </span>
                              </div>
                              <div className="form-group">
                              <RadioBtn 
                                  ischeked={this.industry.other || false} 
                                  willChange={(e) => {this.setIdustryStates({other : !this.industry.other})}}
                              />
                              <span>Other : </span>
                              </div>
                              <div className="form-group">
                              <input 
                                  className="form-control" 
                                  value={this.industry.otherIndustry}
                                  placeholder="Specify the type of industry" 
                                  onChange={this.getIndustry}
                              />
                              </div>
                          </div>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row>
            <Col xs="12">
                <FormGroup>
                    <Input type="text" id="name" placeholder="annual revenue" />
                </FormGroup>
            </Col>
            <Col xs="12">
                <FormGroup>
                    <Input type="text" id="name" placeholder="payment details"/>
                </FormGroup>
            </Col>
            <Col xs="12">
                <FormGroup>
                    <Input type="text" id="name" placeholder="created by"/>
                </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-right">
              <Button color="primary" className="crm-btn"> Submit </Button>
              <Button color="secondary" className="crm-btn" onClick={this.props.onAddCompany}> Cancel </Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

export default CompanyForm;