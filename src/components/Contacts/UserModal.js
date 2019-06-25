import React from 'react'

class UserModal extends React.Component {

  render() {
  	var handleToUpdate  =  this.props.handler;
	return (
		<div className="crd-modal-bg">
		<div className="crmModal">
			<div className="modal-title">
			CREATE NEW
			</div>
			<div className="modal-content">
			<ul className="list-options">
				<li>
					<a className="crm-btn" onClick={() => handleToUpdate({isAddUserModal:false, isContactForm:true, isProjectForm:false, isCompanyForm:false, })}> <i className="list-icon fas fa-user-circle"> </i> Contact </a> 
				</li>
				<li>
					<a className="crm-btn"  onClick={() => handleToUpdate({isAddUserModal:false, isCompanyForm:true, isProjectForm:false, isContactForm: false })}> <i className="list-icon fas fa-building"> </i> Company </a> 
				</li>
				<li>
					<a className="crm-btn" onClick={() => handleToUpdate({isProjectForm:true, isCompanyForm:false , isAddUserModal:false, isContactForm: false})}> <i className="list-icon fas fa-file"> </i> Project </a> 
				</li>
			</ul>
			</div>
		</div>
		</div>
	)
  }
}

export default UserModal;