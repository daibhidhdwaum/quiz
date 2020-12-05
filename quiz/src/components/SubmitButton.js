import styled from "styled-components";

const SubmitStyled = styled.button`
  border: 4px solid #ddd;
  width: 200px;
  height: 50px;
  font-family: "Verdana";
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  margin: 20px;
  background-color: white;
  color: #444;

  :hover {
    cursor: pointer;
    border-color: #aba;
    background-color: #444;
    color: white;
    transition: 0.5s;
  }
`;

const Submit = (props) => {
  const onSubmitClick = (e) => {
    e.preventDefault();
    console.log(props);
    console.log("Clicked");
  };
  return <SubmitStyled onClick={onSubmitClick}>Submit</SubmitStyled>;
};

export default Submit;
