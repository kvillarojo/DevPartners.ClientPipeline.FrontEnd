import React from 'react';
// import PropTypes from 'prop-types'
import UserModal from '../../components/Contacts/UserModal'
import ContactForm from  '../../components/Contacts/ContactForm/ContactForm'
import CompanyForm from  '../../components/Company/CompanyForm/CompanyForm'
import ProjectForm from  '../../components/Project/ProjectForm'
import Avatar from 'react-avatar';
// import Select from '../../components/Select/Select'

import './Header.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddUserModal: false,
      isContactForm: false,
      isCompanyForm: false,
      isProjectForm: false,
      selectedEntity: 0
    }

    this.escFunction = this.escFunction.bind(this);
    this.addUser = this.addUserModal.bind(this);
    this.handler = this.handler.bind(this)
    this.handleEntityChange = this.handleEntityChange.bind(this)
  }
  
  addUserModal() {
    this.setState(state => ({
      isAddUserModal: !state.isAddUserModal
    }));
  }

  handler(event) {
    this.setState(event)
  }

  handleEntityChange(e) { 
    this.props.action(e.currentTarget.value)
  }

  escFunction(event){
    if(event.keyCode === 27) {
      if (this.state.isContactForm) {
        this.setState({isContactForm:false});
      }
      if (this.state.isAddUserModal) {
        this.setState({isAddUserModal:false});
      }
      if (this.state.isCompanyForm) {
        this.setState({isCompanyForm:false});
      }
      if (this.state.isProjectForm) {
        this.setState({isProjectForm:false});
      }
    }
  }
  
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {

    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
        
          <select className="crm-options" onChange={(e) => this.handleEntityChange(e)}> 
              <option value="0"> Contacts </option>
              <option value="1"> Company </option>
              <option value="2"> Projects </option>  
          </select>
          
          <form className="form-inline headerForm">    
            
            <a className="addContacts" onClick={this.addUser}> <span className="fa fa-plus"> </span></a>
            <button className="search-btn" type="submit"> <span className="fa fa-search"></span> </button>
            <input className="form-control mr-sm-2 contact-search" type="search" placeholder="Search" aria-label="Search"/>
            <a href="/" className="crm-icons"> <span className="fas fa-map"> </span> </a>
              <a href="/" className="crm-icons"> <i className="material-icons"> trending_up </i> </a>
            <div className="user-profile">
              <div className="dropdown">
                <Avatar 
                  name="Peter Crusier" 
                  round="90px"
                  size={25}
                />
                <div className="dropdown-content">
                  <a onClick={this.props.dispatch.logOut} href="login" className="btn-logout"><span className="fas fa-lock crm-icon">  </span> logout </a>
                </div>
              </div>
            </div>
          </form> 
        </nav>

        {this.state.isContactForm && 
          (
           <ContactForm state={this.state}/>
          )
        }

        {this.state.isCompanyForm && 
          (
           <CompanyForm 
              state={this.state} 
              onSubmit={this.props.onSubmit} 
              action={this.props.dispatch} 
              handler = {this.handler}
            />
          )
        }

        {this.state.isProjectForm &&
            <ProjectForm 
              state={this.state} 
              onSubmit={this.props.onSubmit} 
              action={this.props.dispatch} 
              handler = {this.handler}
            />
        }
      
        { 
          this.state.isAddUserModal && (<UserModal  handler = {this.handler} />)
        }

      </div> 
    );
  }
}

export default Navbar 