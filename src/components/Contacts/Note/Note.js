import React from 'react'

const RadioBtn = (props) => {
  return (
    <div className="add-note-bg">
        <div className="add-note">
            <div className="note-content">
                <textarea placeholder="Add a note" className="form-control" id="txt-noteForm"/>
            </div>
            <div className="form-inline">
                <div className="note-btn">
                    <div className="form-inline">
                        <i className="fa fa-paperclip crm-icon-note" aria-hidden="true"></i>
                        <label> Attach file </label>
                    </div>
                </div>
                <div className="note-btn">
                    <input className="form-control" placeholder="Add a title"/> 
                </div>
                <div className="note-btn">
                    <button className="btn btn-outline-dark" onClick={() => props.setVisibility({isNoteModal:false})}> Cancel </button>
                    <button className="btn btn-primary btn-note-crm"> Save </button>
                </div>    
            </div>
        </div>
    </div> 
  )
}

export default RadioBtn
 
 
