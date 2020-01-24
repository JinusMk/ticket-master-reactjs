import React from 'react' 
import { connect } from 'react-redux'

import { removeTicket } from '../../actions/tickets'

const TicketShow = (props) => {
    const { ticket } = props

    const handleRemove = () => {
        const confirm = window.confirm("Are you sure? ") 
        if(confirm) {
           props.dispatch(removeTicket(ticket.id))
           props.history.push('/home')
        }
    }

    return (
        <div>
            <div className="back-icon" onClick={() => props.history.push('/home')}>
                    <i className="fas fa-chevron-left"></i>
                    <p>Back to home</p>
            </div>
            <div className="ticket-detail">
                <h3>Name :<span>{ticket.name.toUpperCase()}</span></h3>
                <h3>Department :<span>{ticket.department}</span></h3>
                <h3>Priority :<span className="badge badge-success">{ticket.priority.toUpperCase()}</span></h3>
                <h3 style={{margin: 0}}>Message :<span>{ticket.message}</span></h3>
                <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
            </div>
            
        </div> 
    )
}

const mapStateToProps = (state, props) => { 
    const id = props.match.params.id 
    return {
        ticket: state.tickets.find(ticket => ticket.id === id)
    }
}

export default connect(mapStateToProps)(TicketShow)