
class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = { props };
        this.state.props = this.state.props.props;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        localStorage.setItem("renderCharacter", this.state.props.b);
        document.location.href = `${document.location.origin}/player`;
    }

    render() {
        console.log(this.state.props);

        if(this.props.type == "small") {
            return (
                <div className="player" onClick={this.handleClick}>
                    <div>
                        <img src={this.state.props.a.image}></img>
                        
                        <div className="center vertical" style={ { justifyContent: 'center' }}>
                            <h2>{this.state.props.a.name.toUpperCase()}</h2>
    
                            <p>Level: {this.state.props.a.level} | {this.state.props.a.race} | {this.state.props.a.class} | {this.state.props.a.age}y/o</p>
                        </div>
                    </div>                
                </div>
            );
        }else {
            return (
                <div className="player" onClick={this.handleClick}>
                    <div>
                        <img src="./assets/giant_slayer.png"></img>
                        
                        <div>
                            <h2>{this.state.props.a.name.toUpperCase()}</h2>
    
                            <p>Level: {this.state.props.a.level} | {this.state.props.a.race} | {this.state.props.a.class} | {this.state.props.a.age}y/o</p>
    
                            <div className="actions_player">
                                <a>View</a>
                                <a>Edit</a>
                                <a>Tree</a>
                                <a>Delete</a>
                            </div>
                        </div>
                    </div>                
                </div>
            );
        }
        
    }
}
