import styled from "styled-components";

export const StyledFeedback = styled.div`
height: 100vh;
        display: flex;
        justifyContent: 'center';
        alignItems: 'center';
        fontSize: 40;
        color: '#010101';
        background-color: white;
    flex-direction: column;
    margin: 20px auto;
  width:250px;
`;

export const StyledButtonsWrapper = styled.div`
display: flex;
    justify-content: space-around;
`;

export const StyledHeader = styled.h2`
text-align: center;
`;

export const StyledButton = styled.button`
padding:5px 10px;
border:1px solid grey;
border-radius: 5px;
cursor:pointer;
 
&:hover  {
  color:red;
} 
`;

export const StyledTable = styled.table`
font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTr = styled.tr``;

export const StyledTd = styled.td`
text-align:center;
border: 1px solid #ddd;
  padding: 8px;
`;


