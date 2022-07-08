import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getNews, getPost } from "../../redux/action/index";


const ButtonGetNews = styled.button`
background: red;
border: none;
padding: 15px;
color: white;
margin-left: ${props => props.margin ? "20px" : "0px"};
border-radius: 10px;
:hover {
  background: green;
}
`;

//button get todos
let Button = ({ getNews }) => (
  <ButtonGetNews onClick={getNews}>Press to see todos</ButtonGetNews>
);
const mapDispatchToProps = {
  getNews: getNews,
};

Button = connect(null, mapDispatchToProps)(Button);

let ButtonPost = ({ getPost }) => (
  <ButtonGetNews margin="true" onClick={getPost}>Press to see albums</ButtonGetNews>
);

//button get albums
const mapDispatchToPropsPost = {
  getPost: getPost,
};


ButtonPost = connect(null, mapDispatchToPropsPost)(ButtonPost);


export { Button, ButtonPost };

