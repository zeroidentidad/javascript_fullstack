import React from 'react';
import './Form.css';

import {connect} from 'react-redux';

import {reduxForm, Field} from 'redux-form';
import {sendNew} from '../../redux/actions/apiActions';

const validate = values => {
    const errors = {};
    if(!values.asunto){
        errors.asunto = 'Required';
    } else if(values.asunto.length < 6) {
        errors.asunto = 'Minimun be 2 characters or more';
    }
    if(!values.mensaje){
        errors.mensaje = 'Required';
    } else if(values.mensaje.length < 6) {
        errors.mensaje = 'Minimun be 2 characters or more';
    }
    return errors;
}

const renderField = ({label, input, type, meta: {touched, error, warning}}) => (
    <div>
        <label className='control-label'>{label}</label>
        <div>
            <input {...input} type={type} className='form-control' placeholder={label} />
            {touched && ((error && <span className='text-danger'>{error}</span>) || (warning && <span className='text-warning'>{warning}</span>))}
        </div>
    </div>
)

let Form = ( {responseOk, loading, sendNew, handleSubmit}) => {
    const beforeSubmit = (values) => {
        values.user_id = 13;
        sendNew(values);
    }
    return (
        <div className="Form">
            <h3>Añadir nuevo mensaje</h3>
            <form onSubmit={handleSubmit(beforeSubmit)}>
                <div>
                    <Field name='asunto' label='Asunto' type='text' component={renderField}/>
                </div>
                <div>
                    <Field name='mensaje' label='Mensaje' type='text' component={renderField}/>
                </div>
                <div>
                    <input type='submit' value='Enviar' className='enviar'/>
                </div>
            </form>
            { loading ? 'Enviando datos...' : '' }
            { responseOk ? 'Datos enviados correctamente' : '' }
        </div>
    );
}

Form = reduxForm(
    {
        form: 'nuevo',
        validate
    }
)(Form)

const mapStateToProps = (state) => {
    return {
        responseOk: state.apiState.ok,
        loading: state.apiState.loading,
    }
}

export default connect(
    mapStateToProps,
    { sendNew }
)(Form);
