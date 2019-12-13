import React from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/index';

class Form extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    addNewSmurf = e => {
        e.preventDefault()

        const newSMurf = this.state
        this.props.addSmurf(newSmurf)

        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewSmurf}>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      value={this.state.name}
                      onChange={this.handleChange}
                      />
                    <input
                      type='text'
                      name='name'
                      placeholder="Age"
                      value={this.state.age}
                      onChange={this.handleChange}
                      />
                    <input
                      type='text'
                      name='height'
                      placeholder='Height'
                      value={this.state.height}
                      onChange={this.handleChange}
                      />
                    <button onClick={this.addNewSmurf}>Add Smurf</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    }
}

export default connect(
    mapStateToProps,
    {addSmurf}(Form)
)