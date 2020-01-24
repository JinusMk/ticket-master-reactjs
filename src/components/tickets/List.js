import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const TicketList = (props) => {
    console.log(props)
    return (
        <section className="ticket-listing">
            <h1>Tickets</h1>
            <h6 className="count">Found {props.tickets.length} records</h6>
            <ul>
                { props.tickets.map(ticket => {
                    return <li className="ticket-list-item" onClick={() => props.history.push(`/tickets/${ticket.id}`)}>
                        <h3>Name :<span>{ticket.name.toUpperCase()}</span></h3>
                        <h3>Department :<span>{ticket.department}</span></h3>
                        <h3>Priority :<span className="badge badge-success">{ticket.priority.toUpperCase()}</span></h3>
                        <h3 style={{margin: 0}}>Message :<span>{ticket.message}</span></h3>
                    </li>
                })}
            </ul>

            <Link to="/tickets/new" className="btn btn-primary"> Add Ticket </Link>
        </section> 
    )
}

// wrapped component - Higher Order Component (HOC) 
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        city: 'bangalore'
    }
}

export default connect(mapStateToProps)(TicketList)







// Higher Order Function 

// js treats functions as first class citizens 

// const greet = function(){ }
// const name = 'bangalore' 

/*
    function sayName(name) {
        console.log(name)
    }

    sayName(name)

    function execute(greet) {
        greet()
    }

    execute(greet)

    const numbers = [10,20,30,40]

    numbers.forEach(function(){

    })

*/