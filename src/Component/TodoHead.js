import React from "react"
import styled from "styled-components"


const Header = styled.div`
    border-bottom: 1px solid #eee;
    padding-bottom: 1.5rem;
        strong {
            display: block;
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        span {
            display:block;
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 2rem;
            font-weight: bold;
            color: #20c997;
        }
`

const TodoHead = () => {
    return (
        <Header>
            <strong>ㄱㄱ</strong>
        </Header>
    )
}



export default TodoHead


