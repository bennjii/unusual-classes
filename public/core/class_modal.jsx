class ClassModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { props };
    }

    constructTree(tree) {
        if(!tree) return;    

        if(this.props.type !== "view-only") {
            return (
                <li className={(tree.unlocked !== undefined && tree.unlocked) ? "unlocked" : ""}>
                    <a className={((this.props.data.points < tree.unlock_value) ? "locked" : "unlockable") + " " + ((tree.unlocked !== undefined && tree.unlocked) ? "unlocked" : "")}>
                        {tree.name} {(tree.unlocked !== undefined && tree.unlocked) ? `` : `| ${tree.unlock_value}` }
                    </a>
                    
                    { 
                        (tree.children !== undefined && tree.children.length > 0) 
                        ? (
                        <ul className={(tree.unlocked !== undefined && tree.unlocked) ? "unlocked" : "unlockable"}>
                        {
                            tree.children.map((e) => { 
                                return ( this.constructTree(e)  )
                            }) 
                        }
                        </ul>)
                        :
                        ""
                    }  
                </li>
            )
        }else {
            return (
                <li>
                    <a className={"unlockable"}>
                        {tree.name} {(tree.unlocked !== undefined && tree.unlocked) ? `` : `| ${tree.unlock_value}` }
                    </a>
                    
                    { 
                        (tree.children !== undefined && tree.children.length > 0) 
                        ? (
                        <ul className={(tree.unlocked !== undefined && tree.unlocked) ? "unlocked" : "unlockable"}>
                        {
                            tree.children.map((e) => { 
                                return ( this.constructTree(e)  )
                            }) 
                        }
                        </ul>)
                        :
                        ""
                    }  
                </li>
            )
        }
    }

    render() {
        if(!this.props.data.name) return( <div></div> );

        return (
            <div className={this.props.isOpen ? 'classModal' : 'classModal hidden'}>
                <div className="closeButton" onClick={this.props.onRequestClose}><p>&#10799;</p></div>

                <div className="modalHeader">
                    { (this.props.type !== "view-only") ? <h1>{this.props.data.class.capitalize()}</h1> : <h1>{this.props.data.name.capitalize()}</h1>}
                    { (this.props.type !== "view-only") ? <p>{this.props.data.points} Class Point/s</p> : ""}
                </div>
                
                <div className="modalBody">
                    <nav className="nav">
                        <ul>
                            {
                                (this.props.type !== "view-only")
                                ?
                                this.constructTree(this.props.tree)
                                :
                                this.constructTree(this.props.data.tree)
                            }
                        </ul>            
                    </nav>
                </div>
            </div>
        );
    }
}