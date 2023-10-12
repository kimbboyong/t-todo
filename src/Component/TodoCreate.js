import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    width:100%;

`
const Create = styled.div`
    width: 100%;
    position: absolute;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    button {
        display: block;
        width: 100%;
        font-size: 1.8rem;
        margin-top: 1rem;
        outline: none;
        border: none;
        border-radius: 1rem;
        padding: 1rem;
        background: #20c997;
        color: #fff;
        cursor: pointer;
    }
`
const Input = styled.input`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    font-size: 1.7rem;
`

const TodoCreate = ({ onInsert }) => {

    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);

    return (
        <Form onSubmit={onSubmit}>
            <Create>
                <Input
                    placeholder="입력 후 엔터"
                    onChange={onChange}
                    value={value}
                />
            </Create>
        </Form >
    )
}



export default TodoCreate;