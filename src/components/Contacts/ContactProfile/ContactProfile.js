
import React from 'react'
import RadioBtn from "../../Switch/Switch"
import Avatar from 'react-avatar';
import './ContactProfile.scss'

export const ContactProfile = (props) => {
    let isNoteModal = true
    const leadStates ={
      none : false,
      attempted_contact : false,
      future_contact : false,
      contacted : false,
      junk_lead : false,
      lost_lead : false,
      zoom_info : false,
      google : false,
      linkedIn : false
    }

    // console.log(props.note)
    const updateState = (event) => {
      console.log(event)
    }

   const setNoteVisibility = () => {
      isNoteModal = true
   }

	  return (
      <div className="contact-profile">
        <div className="profile-header">
          <div className="profile-pic">
              <Avatar 
                name="Peter Crusier" 
                round="90px"
                size={130}
                />
          </div>
          <div className="profile-name">
            <span> Peter Crusier </span>
          </div>
        </div>
        <div className="profile-content">
          <h4  className="contact-details"> <i className="fas fa-user-circle crm-prof-icons"> </i> Contact Details </h4> 
          <div className="row">
            <div className="col-md-6 crm-list">
              <div className="contact-details-lists">
                <div className="list-label">First Name</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label">Last Name</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label">Position</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label"> Business Email</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label">Personal Email</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label">Business Number</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label">Mobile Number</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label">Skype</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label">WhatsApp</div>
                <div ></div>  
              </div>
              <div className="contact-details-lists">
                <div className="list-label">Home Address</div>
                <div ></div>  
              </div>
            </div> 
            <div className="col-md-6">
              <h4> <i className="fas fa-arrow-circle-up crm-prof-icons"></i> Lead Status </h4>
                <div className="form-group">
                    <RadioBtn 
                      ischeked={leadStates.none} 
                      willChange={(e) => {updateState({none : !leadStates.none})}}
                    />
                  <span className="crm-switch-label"> none </span>
                </div>
                <div className="form-group">
                  <RadioBtn 
                    ischeked={leadStates.attempted_contact} 
                    willChange={(e) => {updateState({attempted_contact : !leadStates.attempted_contact})}}
                  />
                  <span className="crm-switch-label"> Attempted to Contact </span>
                </div>
                <div className="form-group">
                  <RadioBtn 
                    ischeked={leadStates.future_contact} 
                    willChange={(e) => {updateState({future_contact : !leadStates.future_contact})}}
                  />
                  <span className="crm-switch-label"> Contact in Future </span>
                </div>
                <div className="form-group">  
                  <RadioBtn 
                    ischeked={leadStates.contacted} 
                    willChange={(e) => {updateState({contacted : !leadStates.contacted})}}
                  />
                  <span className="crm-switch-label"> Contacted </span>
                </div>
                <div className="form-group">
                  <RadioBtn 
                    ischeked={leadStates.junk_lead} 
                    willChange={(e) => {updateState({junk_lead : !leadStates.junk_lead})}}
                  />
                  <span className="crm-switch-label"> Junck Lead </span>
                </div>
                <div className="form-group">
                  <RadioBtn 
                    ischeked={leadStates.lost_lead} 
                    willChange={(e) => {updateState({lost_lead : !leadStates.lost_lead})}}
                  />
                  <span className="crm-switch-label"> Lost Lead </span>
                </div>
                <h4> <span className="fas fa-user-circle crm-prof-icons">  </span> Lead Source </h4>
                <div className="form-group">
                  <RadioBtn 
                    ischeked={leadStates.zoom_info} 
                    willChange={(e) => {updateState({zoom_info : !leadStates.zoom_info})}}
                  />
                  <span className="crm-switch-label"> Zoominfo </span>
                </div>
                <div className="form-group">
                  <RadioBtn 
                    ischeked={leadStates.google} 
                    willChange={(e) => {updateState({google : !leadStates.google})}}
                  />
                  <span className="crm-switch-label"> Google </span>
                </div>
                <div className="form-group">
                  <RadioBtn 
                    ischeked={leadStates.linkedIn} 
                    willChange={(e) => {updateState({linkedIn : !leadStates.linkedIn})}}
                  />
                  <span className="crm-switch-label"> LinkedIn </span>
                </div>

                <div className="form-inline">
                  <p className="crm-label"> Notes </p>
                  <a className="crm-switch-label" href="#" onClick={() => props.note({isNoteModal: true})}> Add notes </a>
                </div>
            </div>
          </div>
        </div>
      </div>  
    )
}
