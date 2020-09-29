import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'

const Logout =(props) => {

   const logoutProcess = () => {
        props.history.push('/login')
    }

   const onCancel = () => {
        //Make go back to previous page
        props.history.goBack();
    }

 
    return (
        <div>
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes, log me out!"
                confirmBtnBsStyle="danger"
                title="Logout now?"
                onConfirm={logoutProcess}
                onCancel={onCancel}
                focusCancelBtn
                >
                You will logged out from the platform...
            </SweetAlert>
        </div>
    );
}

export default Logout;