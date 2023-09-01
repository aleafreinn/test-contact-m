import React from 'react';
import PropTypes from 'prop-types'
// import {v4 as uuid} from 'uuid'

class ContactForm extends React.Component {
    

    initForm = {
        id: '',
        name: '',
        email: ''
    }

    state = this.initForm;

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Fields must not be empty!");
            this.setState(this.initForm);
            return;
        }
        // const setId = uuid();
        // this.setState({id: '1'})
        this.props.addContactFunc(this.state);
        this.setState(this.initForm)
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler} className='flex flex-col items-center gap-2 px-3 py-6 border-0 rounded-2xl bg-slate-100 shadow-[inset_0_35px_60px_0px_rgba(0,0,0,0.3)] text-slate-800'>
                    <div className='flex flex-col items-center'>
                        <label className='font-bold'>Name</label>
                        <input 
                            type="text" 
                            placeholder="John Doe"
                            value={this.state.name}
                            onChange={(event) => this.setState({name: event.target.value})}
                            className='text-center px-2 py-1 bg-transparent border-b-2 border-slate-800 focus:border-amber-300 focus:outline-0 focus:text-yellow-600 transition-all duration-300 ease-in-out'
                        />

                    </div>
                    <div className='flex flex-col items-center'>
                        <label className='font-bold'>Email</label>
                        <input 
                            type="email"
                            placeholder="johndoe@example.com" 
                            value={this.state.email}
                            onChange={(event) => this.setState({email: event.target.value})}
                            className='text-center px-2 py-1 bg-transparent border-b-2 border-slate-800 focus:border-amber-300 focus:outline-0 focus:text-yellow-600 transition-all duration-300 ease-in-out'
                        />
                    </div>
                    <button type="submit" className='bg-slate-800 text-white font-bold px-2 py-1 w-fit shadow-[0_10px_30px_rgba(0,0,0,1)] hover:bg-yellow-600 hover:border-transparent hover:shadow-[0_10px_30px_rgba(202,138,4,1)] active:outline-none focus:outline-none transition-all duration-200 ease-in-out'>Add contact</button>

                </form>
            </>
        )
    }
}

ContactForm.propTypes = {
    addContactFunc: PropTypes.function
}.isRequired

export default ContactForm;