import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// COMPONENTS
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Stepper from './Stepper/Stepper';
import Loading from './Loading';

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
// import {info} from "node-sass"; //개새끼

// APIKEY

function GosuSurveyBox({info}) {
    const [loading, setLoading] = useState(false);
    const [selectedTown, setSelectedTown] = useState('');
    const email = localStorage.getItem('email')
    const name = localStorage.getItem('name')
    const password = localStorage.getItem('password')
    console.log(info)
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
        console.log(info)
        fetch(`/gosu/signup`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getCookie('is_login'),
            },
            body: JSON.stringify({
                email : info.email,
                password : info.password,
                name : info.name,
                age: age,
                service: radioValue.service,
                career: career,
                gender: radioValue.gender,
                region: selectedTown,
            }),
        })
            .then(res => res.json())
            .then((res)=>{console.log(res);

            // window.location.href='/GosuMain'
            })
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

export default GosuSurveyBox;