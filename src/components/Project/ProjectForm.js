
import React from 'react'
import RadioBtn from "../Switch/Switch"
import './Projects.scss'

class ProjectForm extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
        none: false,
        qualification: false,
        val_proposition: false,
        desc_makers: false,
        prop_quote: false,
        negotiation: false,
        probability: '',
        company_name: '',
        expected_revenue: '',
        closing_date: ''        
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInpuChange = this.handleInpuChange.bind(this)
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

  setdStageSate(event) {
    this.setState(event)
  }

  handleSubmit(e) {
    e.preventDefault()
   
    // const companyDetails = {
    //     none: '',
    //     qualification: '',
    //     val_proposition: '',
    //     desc_makers: '',
    //     prop_quote: '',
    //     negotiation: '',
    //     probability: '',
    //     company_name: '',
    //     expected_revenue: '',
    //     closing_date: '',
    //     project_name: ''
    // }
  
    // const handleToUpdate  =  this.props.handler;
    // const {entityId} = this.state 
    // this.props.action.addCompany(companyDetails)
    // setTimeout(
    //   function() {
    //     handleToUpdate({isCompanyForm:false})
    //     this.props.action.getEntities(entityId)
    //   }
    //   .bind(this),
    //   1000
    // );

    console.log('submit')
  
  }

  render() {
  
	  return (
      <div className="companyForm"> 
        <div className="company-title">
        <i className="fas fa-file-alt crm-icon"></i>
          Project Blog Form
        </div>
        <div className="container">
          <form onSubmit={this.handleSubmit.bind(this)}>
              
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  name='project_name'
                  placeholder="Company Name"
                  value={this.state.project_name}
                  onChange={this.handleInpuChange}
                />
              </div> 

              <div className="form-group">
                <h4> Stage </h4>
                <div  className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <RadioBtn 
                        ischeked={this.state.none} 
                        willChange={(e) => {this.setdStageSate({none : !this.state.none})}}
                      />
                      <span className="crm-label"> None </span>
                    </div>
                    <div className="form-group">
                      <RadioBtn 
                        ischeked={this.state.qualification} 
                        willChange={(e) => {this.setdStageSate({qualification : !this.state.qualification})}}
                      />
                      <span className="crm-label"> Qualification </span>
                    </div>
                    <div className="form-group">
                      <RadioBtn 
                        ischeked={this.state.val_proposition} 
                        willChange={(e) => {this.setdStageSate({val_proposition : !this.state.val_proposition})}}
                      />
                      <span className="crm-label"> Value Proposition </span>
                    </div>
                    <div className="form-group">
                      <RadioBtn 
                        ischeked={this.state.desc_makers} 
                        willChange={(e) => {this.setdStageSate({desc_makers : !this.state.desc_makers})}}
                      />
                      <span className="crm-label"> Identitify Decision Makers  </span>
                    </div>
                    <div className="form-group">
                      <RadioBtn 
                        ischeked={this.state.prop_quote} 
                        willChange={(e) => {this.setdStageSate({prop_quote : !this.state.prop_quote})}}
                      />
                      <span className="crm-label"> Proposal/Price Qoute  </span>
                    </div>
                    <div className="form-group">
                      <RadioBtn 
                        ischeked={this.state.negotiation} 
                        willChange={(e) => {this.setdStageSate({negotiation : !this.state.negotiation})}}
                      />
                      <span className="crm-label"> Negotiation  </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input 
                  className="form-control" 
                  placeholder="Probability"
                  name="probability"
                  value={this.state.probability}
                  onChange={this.handleInpuChange}
                /> 
              </div>
              <div className="form-group">
                <input 
                  className="form-control" 
                  placeholder="Expected Revenue"
                  name="expected_revenue"
                  value={this.state.expected_revenue}
                  onChange={this.handleInpuChange}
                /> 
              </div>
              <div className="form-group">
                <input 
                  className="form-control" 
                  placeholder="Closing Date"
                  name="closing_date"
                  value={this.state.closing_date}
                  onChange={this.handleInpuChange}  
                /> 
              </div>
              <div className="form-group form-submit">
                <button type="submit"> <span className="fas fa-submit"></span> Submit </button>
              </div>
          </form>
         </div> 
      </div>
    )
  }
}

export default ProjectForm;