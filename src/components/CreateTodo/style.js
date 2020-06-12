import styled from "styled-components";

export const CreateTodoContainer = styled.div`
  margin-top: 30px;
  flex: 1;

  h2 {
    text-align: center !important;
    color: red;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .form {
    justify-content: center;
    .radio {
      justify-content: flex-end;
      margin-bottom: 20px;
    }
    .button {
      justify-content: flex-end;
    }
  }
`;
