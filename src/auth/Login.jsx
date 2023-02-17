import LoginForm from "./common/LoginForm";
import styled from "@emotion/styled";

export default function Login() {
    
    const DivRoot = styled.div`
    margin: 0;
    padding: 0;  
    display: "flex"; 
    justify-content: 'center';
    align-items: 'center'; 
  `;
    
    return (
        <DivRoot>
            <LoginForm />
        </DivRoot>
    );
};
