import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// COMPONENTS
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Stepper from './Stepper/Stepper';
import Loading from './Loading';
import SignUp  from "../../SignUp";
// QUESTION DATA
import {
    SelectData,
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
} from '../GosuSurveyData';

// STYLES
import * as S from './SurveyBoxEle';
import {getCookie} from "../../../shared/Cookie";

// APIKEY

function SurveyBox(props) {
    const [loading, setLoading] = useState(false);
    const [selectedTown, setSelectedTown] = useState('');
    const email = localStorage.getItem('email')
    const name = localStorage.getItem('name')
    const password = localStorage.getItem('password')
    console.log(props.test)
    const [radioValue, setRadioValue] = useState({
        gender: '',
        age: '',
        career: '',
        service: '',
    });

    const currentRadioQuestions = {
        0: 'gender',
        1: 'age',
        2: 'career',
        3: 'service',
    };

    let [currentQ, setCurrentQ] = useState(0);

    const history = useHistory();

    // FUNCTIONS
    // const goToFindGosu = () => {
    //     history.push(`/findgosu/${pageInfo.service_id}`);
    // };

    const loadingTime = () => {
        setTimeout(() => {
            submitForm();
        }, 1000);
    };


    const clickNextBtn = () => {
        if (
            (currentQ === 0 && radioValue.gender !== '') ||
            (currentQ === 1 && radioValue.age !== '') ||
            (currentQ === 2 && radioValue.career !== '')||
            (currentQ === 3 && radioValue.service !== '')
        ) {
            plusCurrentQ();
        } else if (currentQ === 4 && selectedTown !== '') {
            setLoading(true);
            loadingTime();
        }

    };

    const plusCurrentQ = () => {
        if (currentQ < 4) {
            setCurrentQ(currentQ + 1);
        }
    };

    const clickPrevBtn = () => {
        if (currentQ === 0) {
            setCurrentQ(0);
            setRadioValue('');
        } else if (currentQ > 0) {
            setCurrentQ(currentQ - 1);
        }
    };

    const getSelectValue = e => {
        const { value } = e.target;
        setSelectedTown(value);
    };

    const getRadioValue = data => {
        const [question, value] = data;

        setRadioValue({ ...radioValue, [value]: question });
    };

    const renderByCurrentQuestion = currentQuestionIdx => {
        const questionMapper = {
            0: (
                <Radio
                    radioValue={radioValue}
                    question={questionOne}
                    getRadioValue={getRadioValue}
                />
            ),
            1: (
                <Radio
                    radioValue={radioValue}
                    question={questionTwo}
                    getRadioValue={getRadioValue}
                />
            ),
            2: (
                <Radio
                    radioValue={radioValue}
                    question={questionThree}
                    getRadioValue={getRadioValue}
                />
            ),
            3: (
                <Radio
                    radioValue={radioValue}
                    question={questionFour}
                    getRadioValue={getRadioValue}
                />
            ),
            4: <Select SelectData={SelectData} getSelectValue={getSelectValue} />,
        };

        return (
            <S.SurveyLine>
                <S.RadioBox>{questionMapper[currentQuestionIdx]}</S.RadioBox>
            </S.SurveyLine>
        );
    };

    const submitForm = () => {
        const age = radioValue.age.slice(0, 2);
        const [career] = radioValue.career.split('~');
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                Authorization: getCookie('is_login'),
            },
            body: JSON.stringify({
                // user_id: 12,
                age: Number(age),
                service: radioValue.service,
                career: Number(career),
                gender: radioValue.gender,
                region: selectedTown,
                service_id: 2,
                email:email,
            }),
        })
            .then(res => res.json())
            .then(()=>{console.log('성공');
                localStorage.removeItem('email')
                localStorage.removeItem('name')
                localStorage.removeItem('password')

            window.location.href='/GosuMain'})
            // 프로필로 변경
            // .then(goToFindGosu());
    };

    return (
        <S.SurveyFormBox>
            <S.SurveyForm>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Stepper currentQ={currentQ} />
                        {renderByCurrentQuestion(currentQ)}
                        <S.BtnLine>
                            {currentQ !== 0 && (
                                <S.PrevBtn onClick={clickPrevBtn}>이전</S.PrevBtn>
                            )}
                            <S.NextBtn onClick={clickNextBtn}>다음</S.NextBtn>
                        </S.BtnLine>
                    </>
                )}
            </S.SurveyForm>
        </S.SurveyFormBox>

    );
}

export default SurveyBox;