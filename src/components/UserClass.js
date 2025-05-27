import  React  from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            userInfo:{
                name:"dummy",
                location:"Default",
                avatar_url:"Dummy"
            },
        };
        console.log("User constructor");
    }
    
    async componentDidMount(){
        console.log("Component Did Mount");
        const userData = await fetch("https://api.github.com/users/ajitesh-tech");
        const jsonData = await userData.json();
        console.log(jsonData);
        this.setState(
            {
                userInfo:jsonData,
            }
        )
    }
    componentDidUpdate(){
        console.log("Component Did update");
    }

    render(){
         const {name,location,avatar_url} = this.state.userInfo;
         console.log("render called");
        return (
        <div className="user-card">
            <img src={avatar_url}></img>
            <h2> Name :{name}</h2>
            <h3>Location : {location}</h3>
        </div>
     )
    }
}
export default UserClass;