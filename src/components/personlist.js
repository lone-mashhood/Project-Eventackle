import React from "React";
import axios from "axios";


export default class PersonList extends React.Component{
state={
    persons:[],
};

componentsDidMount(){
    axios.get(https://my-json-server.typicode.com/orzel-bielik/test/posts);
    .then(res => {
        this.setState({persons: res.data});
    })
}
}