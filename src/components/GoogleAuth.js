import React, { Component } from 'react'

class GoogleAuth extends Component {
  state={isSignedIn:null};

  componentDidMount(){
     // wired up the GAPI library
    window.gapi.load('client:auth2',()=>{ 
      // initialized the authentication client with our clientID
      window.gapi.client.init({
        clientId:'591438763136-q3luu6nnfgaoehb30h743qklurcer747.apps.googleusercontent.com',
        scope:'profile email'
      }).then(()=>{ // is going to be automatically inovked after a library has successfully initialize itself.

        // only executed once our entire API library is ready to go.
        this.auth=window.gapi.auth2.getAuthInstance();// getting a reference to that object or get the user's current authentication status
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange=()=>{
    this.setState({ isSignedIn:this.auth.isSignedIn.get() })
  }

  onSignIn=()=>{
    this.auth.signIn();
  };

  onSignOut=()=>{
    this.auth.signOut();
  }
  
  renderAuthButton(){
    if(this.state.isSignedIn==null)
    {
      return null;
    }
    else if(this.state.isSignedIn){
      console.log(this.auth.currentUser.get().getBasicProfile().tf);
      console.log(this.auth.currentUser.get().getBasicProfile().zv);
      const user=this.auth.currentUser.get().getBasicProfile().zv;
      return ( 
        <div className="ui compact menu" style={{marginLeft:'15px'}}>
          <div className="ui simple dropdown item">
            {user}
            <i className="dropdown icon"></i>
            <div className="menu">
                <button onClick={this.onSignOut} className="ui primary button" style={{marginLeft:'50px'}}>
                  <i className="google icon" style={{color:'red'}} />      
                    Sign Out  
                </button>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <button onClick={this.onSignIn} className="ui primary button" style={{marginLeft:'15px',marginTop:'3px'}}>
          <i className="google icon" style={{color:'red'}}/>
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth;