import React from 'react' 
import uuid from 'uuid'
import Select from 'react-select'

class TicketForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            department: '',
            message: '', 
            priority: "",
            error: {},
            loader: false
        }

        this.priorityOptions = [
            { value: 'high', label: 'High' },
            { value: 'medium', label: 'Medium' },
            { value: 'low', label: 'Low' }
        ]
    }

    handleChange = (e) => {
        e.persist()
        this.setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            error: {
                ...prevState.error,
                [e.target.name]: ''
            }
        }))
    }

    handlePriorityChange = (option) => {
        this.setState((prevState) => ({ 
            ...prevState,
            error: {
                ...prevState.error,
                priority: ''
            },
            priority: option.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ loader: true })
        const { name, department, message, priority } = this.state
        const validateFormdata = {
            name: name ? '' : 'Please enter Name',
            department: department ? '' : 'Please select Department',
            priority: priority ? '' : 'Please select Priority',
            message: message ? '' : 'Please enter any Message'
        }
        if(Object.keys(validateFormdata).every((key) => { return validateFormdata[key] == ''})){
            const formData = {
                id: uuid(), 
                name,
                department,
                priority,
                message
            }
            console.log('formData', formData)
            this.props.addTicket(formData)
        }else{
            this.setState(prevState => ({
                ...prevState,
                loader: false,
                error : validateFormdata
            }))
        }
    }
    render() {
        const { error, loader } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name <br />
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} className="form-control" />
                            {error.name ? <h6 className="error-info">{error.name}</h6> : null}
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Department<br />
                            <select value={this.state.department} onChange={this.handleChange} name="department" className="form-control">
                                <option value=""> Select </option>
                                <option value="technical"> Technical </option>
                                <option value="sales"> Sales </option>
                                <option value="hr"> Human Resource </option>
                            </select>
                            {error.department ? <h6 className="error-info">{error.department}</h6> : null}
                        </label>
                    </div>
                    <div className="react-select-container form-group">
                        <label>
                            Priority<br />
                            <Select
                                value={this.state.priority.value}
                                options={this.priorityOptions}
                                onChange={this.handlePriorityChange}
                            />
                            {error.priority ? <h6 className="error-info">{error.priority}</h6> : null}
                        </label>    
                    </div> 
                    <div className="form-group">
                        <label>
                            Message<br />
                            <textarea value={this.state.message} onChange={this.handleChange} name="message" className="form-control"></textarea>
                            {error.message ? <h6 className="error-info">{error.message}</h6> : null}
                        </label>
                    </div>

                    <input type="submit" disabled={loader} value={loader ? 'Processing...' : "Add Ticket"} className="btn btn-primary" />

                </form>
            </div>
        )
    }
}

export default TicketForm