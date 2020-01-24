import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import TicketForm from './Form'

import { addTicket } from '../../actions/tickets'

const TicketNew = (props) => {

    const handleSubmit = (formData) => {
        console.log('add ticket inside')
        props.dispatch(addTicket(formData))
        props.history.push('/home')
    }

    return (
        <div className="row new-ticket-section" >
            <div className="col-md-6 add-ticket">
                <h2> Add Ticket </h2>
                <TicketForm addTicket={handleSubmit} />
            </div>
            <div className="col-md-4 last-ticket offset-md-2">
                {props.previousTicket ? <>
                    <h2 className="title">Last Ticket</h2>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{props.previousTicket.name.toUpperCase()}</h5>
                            <p class="card-text">{props.previousTicket.message}</p>
                            <p>Priority: <span className="badge badge-success">{props.previousTicket.priority.toUpperCase()}</span></p>
                            <Link to={`/tickets/${props.previousTicket.id}`} className="btn btn-primary">Show</Link> 
                        </div>
                    </div> </>: null}
            </div>
            
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        previousTicket: _.last(state.tickets)
    }
}   

export default connect(mapStateToProps)(TicketNew)