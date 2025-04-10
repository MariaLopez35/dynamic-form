import { useState } from 'react';
import './DynamicForm.css';
import { Container } from 'react-bootstrap';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep'
import ThirdStep from './ThirdStep/ThirdStep';

export default function DynamicForm() {

    const [step, setStep] = useState(1);

    const showNextStep = () => {

        setStep(step + 1);
    }

    const showPreviewStep = () => {
        setStep(step - 1);
    }


    return (
        <div className="dynamic-form mt-4 mb-5" id="dynamic-form">
            <Container className="text-center p-4">
                <div className="content-dynamic-form mt-5 p-4">
                    <h1 className="title-dynamic-form">Fill the form</h1>
                    <p className="steps-numbers">Step {step} of 3</p>

                    {getPageStep(step, setStep)}

                    <div className='actions'>
                        <div className='container-text'>
                            {step > 1 && step < 4 && (
                                <p className='before' onClick={showPreviewStep}>⬅️ Before Step</p>
                            )}
                        </div>
                        <div className='container-text'>
                            {step > 0 && step < 3 && (
                                <p className='next' onClick={showNextStep}>Next Step ➡️</p>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

function getPageStep(step, setStep) {

    if (step === 1) {
        return <FirstStep />
    } else if (step === 2) {
        return <SecondStep />
    } else if (step === 3) {
        return <ThirdStep />
    }
}