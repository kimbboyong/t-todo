import React from "react"
import styled from "styled-components"

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 1.5rem 0;
`
const Check = styled.div`
    width: 3rem;
    height: 3rem;
    border: 1px solid #20c997;
    border-radius: 50%;
    cursor: pointer;
    overflow: hydden;
`
const Checked = styled.div`
    width: 3rem;
    height: 3rem;
    background: #20c997;
    border-radius: 50%;
    cursor: pointer;
`

const Txt = styled.div`
    flex: 1;
    font-size: 1.8rem;
    color: #333;
`

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #ddd;
    cursor: pointer;
    &:hover {
        color: #f00;
        font-weight: bold;
    }
`

const Update = styled.div`
    
`

const TodoItem = ({ todos, onRemove, onToggle }) => {
    return (
        <div>
            {
                todos.map((todo) => (
                    <Content key={todo.id}>
                        {todo.checked ? <Checked onClick={() => onToggle(todo.id)} /> : <Check onClick={() => { onToggle(todo.id) }} />}

                        <Txt>{todo.text}</Txt>
                        <Remove onClick={() => { onRemove(todo.id) }}>
                            제거
                        </Remove>
                    </Content>
                ))
            }
        </div>
    )
}

export default TodoItem;