import '../../css/estilo.css';

import React, {Component} from 'react';
import {Authenticator} from 'aws-amplify';
import {Amplify} from 'aws-amplify';
import ReactDom from 'react-dom';
import '@aws-amplify/ui-react/styles.css';

export default class teladeLogin extends Component {

  componentDidMount() {
    Amplify.configure({
      mandatorySingIn: true, 
      region: 'us-east-1',
      userPoolId: 'us-east-1_1qRVzWqRQ',
      identityPooId:'us-east-1:334e3052-0b0d-47c2-ad6e-95c46dff48a4',
      userPoolWebClientId: '5ugm8sdhsjpe253hsahsg4lv27'
    })
  }

  render(){
    return(
      <div> <Authenticator/> </div>
    )
  }

}

