import React from 'react';
import { connect } from "react-redux";
import { getCompanyNameList, getSelectedEntityRequest } from '../../../actions/entityAction';
import Contact from './Contact';
import ContactProfile from './ContactProfile';

const R = require('ramda');

class index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeComponent: true,
            setProfileData: []
        }
        this.updateComponentToLoad = this.updateComponentToLoad.bind(this)
    }

    updateComponentToLoad = (eventID) => {
        this.setState({activeComponent: !this.state.activeComponent})
        if(eventID !== undefined){
            this.getProfile(eventID)
        }
    }

    getProfile = (id) => {
        // console.clear(i)
        console.log(id)
        var hasID = R.propEq('contactId', id);
        const profileData = R.filter(hasID)(this.props.data)
        this.setState({setProfileData: profileData})
    }

    componentToLoad = () =>{
        if(this.state.activeComponent){
            return (
                <Contact isComponent={this.updateComponentToLoad} data={this.props.data}/>
            )
        }else{
            return (
                <ContactProfile isComponent={this.updateComponentToLoad} profile={this.state.setProfileData[0]}/>
            ) 
        }
    }

    componentWillMount(){
        this.props.getContactList()
    }

    render () {
        
        return (
            <div>
                {
                    this.componentToLoad()
                }
            </div>      
        )
    }
} 

const mapStateToProps = (store) => {
    console.log(store)
    return {
        data: store.entityReducer.data 
    }
};

const mapDispatchToProps = dispatch => ({
    getCopanyNameList: data => dispatch(getCompanyNameList(data)),
    getContactList: data => dispatch(getSelectedEntityRequest(1))
});

export default connect(mapStateToProps, mapDispatchToProps)(index)