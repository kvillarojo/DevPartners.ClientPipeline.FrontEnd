
import React from 'react'
import RadioBtn from "../../Switch/Switch"
import Swal from 'sweetalert2'

export class CompanyUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            others: false,
            companyName: '',
            companyPhone:  '',
            companyFax:     '',
            website:  '',
            companyAddress:  '',
            numberOfEmployee:  '',
            annualRevenue: '',
            paymentDetails:  '',
            adminId:  '',
            it: false,
            hospitality: false,
            retail: false,
            corporate: false,
            medical: false,
            otherIndustry: '',
            entityId:'',
            companyId :'',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setIdustryStates = this.setIdustryStates.bind(this)
        this.getIndustry = this.getIndustry.bind(this)
        this.handleInpuChange = this.handleInpuChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const companyDetails = {
            companyId: this.state.companyId,
            companyName: this.state.companyName,
            companyPhone: this.state.companyPhone,
            companyFax: this.state.companyFax,
            website: this.state.website,
            companyAddress: this.state.companyAddress,
            state: "",
            numberOfEmployee: this.state.numberOfEmployee,
            otherIndustry: this.state.otherIndustry,
            annualRevenue: this.state.annualRevenue,
            paymentDetails: this.state.paymentDetails,
            adminId: this.state.adminId,
            isActive: 1,
            filter: 0,
            it: (this.state.it) ? 1 : 0,
            hospitality: (this.state.hospitality) ? 1 : 0,
            retail: (this.state.retail) ? 1 : 0,
            corporate: (this.state.corporate) ? 1 : 0,
            medical: (this.state.medical) ? 1 : 0,
            others: this.state.otherIndustry
        }

        this.submitCompanyUpdate(companyDetails) 
        
   }

   submitCompanyUpdate(companyDetails) {
    Swal.fire({
        title: 'Update company?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Update!'
      }).then((result) => {
        if(result.value){
            this.props.update(companyDetails)
            this.props.cancel()
        }
    })
   }

    getCompanyDetails() {
        this.props.getDetails()
    }

   handleInpuChange(e) {
        this.setState({[e.target.name]: e.target.value})
   }

   setIdustryStates(event) {
       console.log(event.others)
        if(!event.others){
            this.setState({otherIndustry: ''})
        }
       this.setState(event)
   }

   getIndustry(e) {
       if (this.state.others){
           this.setState({otherIndustry: e.target.value})
        }
   }
   
   componentWillMount() {
        const {data} = this.props
        this.setState({
            others: (data.others != '') ? true : false,
            companyName: data.companyName,
            companyPhone: data.companyPhone,
            companyFax: data.companyFax,
            website: data.website,
            companyAddress: data.companyAddress,
            numberOfEmployee: data.numberOfEmployee,
            annualRevenue: data.annualRevenue,
            paymentDetails: data.paymentDetails,
            adminId: data.adminId,
            it: (data.it === 1) ? true : false,
            hospitality: (data.hospitality === 1) ? true : false,
            retail: (data.retail === 1) ? true : false,
            corporate: (data.corporate === 1) ? true : false,
            medical: (data.medical === 1) ? true : false,
            otherIndustry: data.others,
            entityId:'',
            companyId : data.companyId
        })
   }

   render() {
        return (
            <div className="companyForm"> 
                <div className="company-title">
                    <i className="material-icons company-icon">
                        business
                    </i>
                    Company Update
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            name='companyName'
                            placeholder="Company Name"
                            value={this.state.companyName}
                            onChange={this.handleInpuChange}
                        />
                        </div> 
                        
                        <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
        
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Company Phone" 
                                name="companyPhone"
                                value={this.state.companyPhone}
                                onChange={this.handleInpuChange}
                            />
        
                            </div>
                            
                            <div className="col-md-6">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Company Fax" 
                                name="companyFax"
                                value={this.state.companyFax}
                                onChange={this.handleInpuChange}
                            />
                            </div>
        
                        </div> 
                        </div>
        
                        <div className="form-group"> 
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Website" 
                            name="website"
                            value={this.state.website}
                            onChange={this.handleInpuChange}
                        />
                        </div>
        
                        <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Company Address" 
                            name="companyAddress"
                            value={this.state.companyAddress}
                            onChange={this.handleInpuChange}
                        />
                        </div>
        
                        <div className="form-group">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Number of Employees" 
                                name="numberOfEmployee"
                                value={this.state.numberOfEmployee}
                                onChange={this.handleInpuChange}
                            />
                        </div>
        
                        <div className="form-group">
                        <h4> Industry </h4>
                        <div  className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <RadioBtn 
                                ischeked={this.state.it} 
                                willChange={(e) => {this.setIdustryStates({it : !this.state.it})}}
                                />
                                <span className="crm-label"> IT </span>
                            </div>
                            <div className="form-group">
                                <RadioBtn 
                                ischeked={this.state.hospitality} 
                                willChange={(e) => {this.setIdustryStates({hospitality : !this.state.hospitality})}}
                                />
                                <span className="crm-label"> Hospitality </span>
                            </div>
                            <div className="form-group">
                                <RadioBtn 
                                ischeked={this.state.retail} 
                                willChange={(e) => {this.setIdustryStates({retail : !this.state.retail})}}
                                />
                                <span className="crm-label"> Retail </span>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <RadioBtn 
                                ischeked={this.state.corporate} 
                                willChange={(e) => {this.setIdustryStates({corporate : !this.state.corporate})}}
                                />
                                <span className="crm-label"> Corporate </span>
                            </div>
                            <div className="form-group">
                                <RadioBtn 
                                ischeked={this.state.medical} 
                                willChange={(e) => {this.setIdustryStates({medical : !this.state.medical})}}
                                />
                                <span className="crm-label"> Medical </span>
                            </div>
                            <div className="form-group">
                                <input 
                                type="checkbox" 
                                className="filled-in" 
                                checked={this.state.others}
                                onChange={(e) => {this.setIdustryStates({others : !this.state.others})}}
                                value={this.state.otherIndustry}
                                />
                                <span>Other : </span>
                            </div>
                            <div className="form-group">
                                <input 
                                className="form-control" 
                                value={this.state.otherIndustry}
                                placeholder="Specify the type of industry" 
                                onChange={this.getIndustry}
                                />
                            </div>
                            </div>
                        </div>
                        </div>
        
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                placeholder="Annual Revenue"
                                name="annualRevenue"
                                value={this.state.annualRevenue}
                                onChange={this.handleInpuChange}
                            /> 
                            </div>
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                placeholder="Payment Details"
                                name="paymentDetails"
                                value={this.state.paymentDetails}
                                onChange={this.handleInpuChange}
                            /> 
                        </div>
                        <div className="form-group">
                        <input 
                            className="form-control" 
                            placeholder="Created By"
                            name="adminId"
                            value={this.state.adminId}
                            onChange={this.handleInpuChange}  
                        /> 
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-outline-primary btn-crm"> 
                                <span className="fas fa-submit"></span> 
                                    Update 
                            </button>
                            <button type="reset" className="btn btn-success btn-crm" onClick={this.props.cancel}> 
                                <span className="fas fa-submit"></span> 
                                    Cancel 
                            </button>
                        </div>
                    </form>
                </div> 
            </div>
        )
    }
}
