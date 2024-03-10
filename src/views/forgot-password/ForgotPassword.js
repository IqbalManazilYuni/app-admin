import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const navigate = useNavigate();

    const handleVerification = () => {
        if (username === 'ayam' && email === 'manazilyuniiqbal@gmail.com') {
            setIsUsernameValid(true);
            setIsEmailValid(true);

            // Show success toast
            toast.success('Username and email found!', { position: 'top-right' });
        } else {
            setIsUsernameValid(false);
            setIsEmailValid(false);

            // Show error toast
            toast.error('Username or email not found.', { position: 'top-right' });
        }
    };
    const handleNavigate = () => {
        navigate('/login'); // Navigate to /login route
    };

    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm>
                                    <h1>Forgot Password</h1>
                                    <p className="text-body-secondary">Create your account</p>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser} />
                                        </CInputGroupText>
                                        <CFormInput
                                            placeholder="Username"
                                            // autoComplete="username"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </CInputGroup>

                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>@</CInputGroupText>
                                        <CFormInput
                                            placeholder="Email"
                                            // autoComplete="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </CInputGroup>
                                    {isEmailValid === false && isUsernameValid === false && (
                                        <CButton color="success" style={{ marginTop: 10, marginBottom: 10, width: '100%', color:'white' }} onClick={() => handleVerification()}>
                                            Check Account
                                        </CButton>
                                    )}
                                    {isEmailValid === true && isUsernameValid === true && (
                                        <>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText>
                                                    <CIcon icon={cilLockLocked} />
                                                </CInputGroupText>
                                                <CFormInput
                                                    type="password"
                                                    placeholder="Password"
                                                    autoComplete="new-password"
                                                />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupText>
                                                    <CIcon icon={cilLockLocked} />
                                                </CInputGroupText>
                                                <CFormInput
                                                    type="password"
                                                    placeholder="Repeat password"
                                                    autoComplete="new-password"
                                                />
                                            </CInputGroup>
                                            <CButton color="success" style={{ marginTop: 10, marginBottom: 10, width: '100%', color:'white' }} onClick={() => handleNavigate()}>
                                                Change Password
                                            </CButton>
                                        </>
                                    )}
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default ForgotPassword;
