import React from 'react'

export default class AutoCompleteText extends React.Component {
    constructor(props){
        super(props)
        this.items = this.props.list 
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    setNames(obj) {
        let list = []
        obj.map((value) => {
            list.push(value.name)
        })
        return list
    }

    onTextChange = (e) =>{
       const value = e.target.value
       const list = this.setNames(this.props.list)

        console.log(this.props.list[0])

       let suggestions = []
       if(value.length > 0) {
            const regex = new RegExp(`${value}`, 'i');
            suggestions = list.sort().filter(v => regex.test(v));
       }
       this.setState(() => ({ suggestions, text: value }))
       this.props.value(value)
    }

    suggestionSelectedValue (value, id) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }))
        this.props.value(value)
        this.props.companyId(id)
    }

    renderSuggestions() {
        const { suggestions } = this.state
        if(suggestions.length === 0){
            return null
        }

        console.log(suggestions)
        return (
            <ul className="crm-linked-style">
                {suggestions.map((item, i) => <li className="crm-linked-list" key={i} onClick={() => this.suggestionSelectedValue(item, item)}> {item} </li>)}
            </ul>
        )
    }

    render() {
        const {text} = this.state
        return (
            <div>
                <input type="text" className="form-control" placeholder={this.props.placeholder} onChange={this.onTextChange} value={text || ''}/>  
                 {this.renderSuggestions()}
            </div>
        )
    }

}