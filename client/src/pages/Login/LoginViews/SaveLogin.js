import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link, useHistory} from 'react-router-dom';


import {useSelector, useDispatch, getState} from 'react-redux';
import {setViewerToken, getViewerToken} from '../../Viewer';
import TextField from "@material-ui/core/TextField";
import {TextFieldInput, PassInput} from "../../common/components/TextFieldInput";
import { reduxForm, Field } from 'redux-form';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));
const SaveLoginForm = (props) => {
    const { handleSubmit, history } = props;
    const viewer = useSelector(state => state.viewer);

    console.log(viewer.token);
    const handleSave = async (formValues, dispatch) => {
        // console.log(formValues);
        const res = await axios.get('/api/logins', {
            headers: {
                'authorization': localStorage.getItem('token')
            }});

        console.log('hello', res);


        //{ username: 'Your enterereduseRName', password: 'your password' }
        try {



            // console.log(req.user);
            // console.log(userId[0].userId);
            const res = await axios.post('/api/logins', formValues, {
                headers: {
                    'authorization': localStorage.getItem('token')
                }});
            console.log(res);
            // history.push('/api/logins');
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Field
                name='website'
                label='website'
                component={TextFieldInput}
            />
            <Field
                name='username'
                label='username'
                component={TextFieldInput}
            />
            <Field
                name='password'
                label='password'
                component={TextFieldInput}
            />
            <Field
                name='passwordStrength'
                label='confirm'
                component={PassInput}
            />
            <Button
                onClick={ handleSubmit(handleSave) }
                variant="contained"
                color="primary">
                Save Credentials
            </Button>
        </form>
    );
}

export const WrappedSaveLogin = reduxForm({ form: 'saveLogin' })(SaveLoginForm);
