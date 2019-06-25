
import React from 'react'
// import Switch from "react-switch";
import Avatar from 'react-avatar';
import './CompanyProfile.scss'

function getActiveIndustry(industry){
  const list = [];
  industry.map((obj) => {
    if(obj.status == 1){
      list.push(obj.type)
    }
  })
  console.log(industry)
  return list
}

function onCompanyUpdate(data){
  console.log(data)
}

export const CompanyProfile = (props) => {
   console.log(props.data[0])

   const  {created, filter, isActive, lastUpdate, state, ...rest} = props.data[0]
   
   let selectedIndustry = []
   const insdustries = [
      {  
        type : 'IT',
        status: rest.it
      },
      {
        type: 'Hospitality',
        status: rest.hospitality
      },
      {
        type: 'Retail',
        status: rest.retail
      },
      {
        type: 'Medical',
        status: rest.medical
      },
      {
        type: 'Corporate',
        status: rest.corporate
      },
      {
        type: rest.others,
        status: (rest.others != '') ?  1 : 0
      }
    ]

    const onProgfileUpdate = () => {
      props.update()
    }
    
    const val = getActiveIndustry(insdustries)

	  return (
      <div className="company-profile">
        <div className="profile-header">
         <div className="profile-pic">
            <Avatar 
              name={rest.companyName} 
              round="90px"
              size={130}
            />
            <div className="crm-update-pic">
              <a className="crm-pic-update"><i className="fas fa-pencil-alt"></i> </a>
            </div>
         </div>
         <div className="profile-name">
           <div className="form-inline">
              <span> {rest.companyName} </span>
              <div className="crm-update">
                <a onClick={() => onProgfileUpdate()}><i className="fas fa-pencil-alt"></i> </a>
              </div>
           </div>
          
         </div> 
       </div>
      <div className="profile-content">
        <h4  className="contact-details"> <i className="fas fa-building crm-prof-icons"></i> Company Details </h4> 
        <div className="row">
          <div className="col-md-12 crm-list">
            <div className="contact-details-lists">
              <div className="list-label">Company Name</div>
              <div> {rest.companyName} </div>  
            </div>
            <div className="contact-details-lists">
              <div className="list-label">Company Phone</div>
              <div> <a href={"tel:"+ rest.companyPhone.split(' ').join('')}> {rest.companyPhone} </a> </div>  
            </div>
             <div className="contact-details-lists">
              <div className="list-label"> Company Fax </div>
              <div > <a href={"tel:" + rest.companyFax.split(' ').join('')}> {rest.companyFax} </a></div>  
            </div>
             <div className="contact-details-lists">
              <div className="list-label"> Website </div>
              <div >{rest.website}</div>  
            </div>
             <div className="contact-details-lists">
              <div className="list-label"> Company Address </div>
              <div >{rest.companyAddress}</div>  
            </div>
            <div className="contact-details-lists">
              <div className="list-label"> Number of Employees </div>
              <div >{rest.numberOfEmployee}</div>  
            </div>
            <div className="contact-details-lists">
              <div className="list-label"> Industry </div>
              <div >{val.join(', ')}</div>  
            </div>
            <div className="contact-details-lists">
              <div className="list-label">Annual Revenue</div>
              <div >{rest.annualRevenue}</div>  
            </div>
            <div className="contact-details-lists">
              <div className="list-label">Payment Details</div>
              <div >{rest.paymentDetails}</div>  
            </div>
            <div className="contact-details-lists">
              <div className="list-label">Created By</div>
              <div >{ rest.adminId }</div>  
            </div>
          </div>
        </div>
      </div>
    </div> 
    );
  
}
