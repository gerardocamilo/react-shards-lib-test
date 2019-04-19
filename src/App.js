import React from "react";
import { Alert, Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default class ButtonsExample extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isBannerVisible: false,
      randomText: "Random Text!!"
    }
  }

  isBannerVisible(){
    return this.state.isBannerVisible;
  }

  showBanner(flag) {
    this.setState({isBannerVisible: flag});
  }

  generateRandomText() {
    this.setState({randomText:'Gerardo!'});
  }

  render() {

    

    return (
      <center>
    <div className="example">
      <TUButton clickHandlerFunc={()=> this.showBanner(!this.state.isBannerVisible)}></TUButton>
      
      <Button theme="secondary">Secondary</Button>
      <Button theme="success">Success</Button>
      <Button theme="info">Info</Button>
      <Button theme="warning">Warning</Button>
      <Button theme="danger">Danger</Button>
      <Button theme="light">Light</Button>
      <Button theme="dark" onClick={()=> this.generateRandomText()}>{this.state.randomText}</Button>  
    </div>
    <div>
      <DismissibleAlertExample isVisible={()=> this.isBannerVisible()} dismiss={()=> this.showBanner(false)}/>
    </div>
    </center>
    );
  }


}

export class DismissibleAlertExample extends React.Component {
  constructor(props) {
    super(props);
    this.dismiss = this.dismiss.bind(this);
    this.state = { 
      visible: props.visible, 
      isVisible: props.isVisible,
      dismiss: props.dismiss,
    };
  }

  render() {
    return (
      <Alert dismissible={this.dismiss} open={this.state.isVisible()}>
        You can easily dismiss me using the <strong>close</strong> button &rarr;
      </Alert>
    );
  }

  dismiss() {
    this.state.dismiss();
  } 
  
}

function TUButton(props) {
  return (
    <Button theme="primary" onClick={props.clickHandlerFunc}>
      Primary
    </Button>
  );
}
