import React, { useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { CgSpinner } from 'react-icons/cg';
import OtpInput from 'otp-input-react';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { auth } from './firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast, Toaster } from 'react-hot-toast';

const Authenticate = () => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    function onCaptchVerify() {
        if(!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                  // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignup();
                  // ...
                },
                'expired-callback': () => {
                  // Response expired. Ask user to solve reCAPTCHA again.
                  // ...
                  toast.error("Recaptcha expired, please try again.");
                }
              });
        }
    }

    // function onCaptchVerify() {
    //     if (!window.recaptchaVerifier) {
    //       window.recaptchaVerifier = new RecaptchaVerifier(
    //         "recaptcha-container",
    //         {
    //           size: "invisible",
    //           callback: (response) => {
    //             onSignup();
    //           },
    //           "expired-callback": () => {},
    //         },
    //         auth
    //       );
    //     }
    //   }

    function onSignup() {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;
        const formatPh = '+' + ph;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOTP(true);
                toast.success('OTP sent successfully!');
            })
            .catch((error) => {
                console.error("Error during signInWithPhoneNumber: ", error);
                toast.error("Failed to send OTP. Please try again.");
                setLoading(false);
            });
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult.confirm(otp).then(async (res) => {
            setUser(res.user);
            setLoading(false);
            toast.success("OTP verified successfully!");
        })
        .catch((err) => {
            console.error("Error during OTP verification: ", err);
            toast.error("Invalid OTP. Please try again.");
            setLoading(false);
        });
    }

    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id='recaptcha-container'></div>
                {user ? (
                    <h2 className='text-center text-white font-medium text-3xl mb-6'>
                        Login Success 
                    </h2>
                ) : (
                    <div className='w-80 flex-col gap-4 rounded-lg p-4'>
                        <h1 className='text-center leading-normal text-white font-medium text-3xl mb-6'>
                            Welcome to <br/> OTP Authentication
                        </h1>
                        {showOTP ? (
                            <>
                                <label 
                                    htmlFor='otp' 
                                    className='font-bold text-xl text-white text-center'
                                >
                                    Enter your OTP
                                </label>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="otp-container"
                                />
                                <button onClick={onOTPVerify} className='bg-emerald-600 w-full flex-gap-1 items-center justify-center py-2.5 text-white rounded'>
                                    {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
                                    <span> Verify OTP</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                    <BsTelephoneFill size={30} />
                                </div>
                                <label htmlFor='' className='font-bold text-xl text-white text-center'>
                                    Verify your phone number
                                </label>
                                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                                <button onClick={onSignup} 
                                className='bg-emerald-600 w-full flex-gap-1 items-center justify-center py-2.5 text-white rounded'>
                                    {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
                                    <span>Send code via SMS</span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Authenticate;
