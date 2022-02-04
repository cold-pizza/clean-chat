import './style.scss';
import React from 'react';
const LoginLoading = function() {
    return <div className="login-loading">
      <div className="app-name"></div>
      <div className="loading-box"></div>
      <div className="loading-box"></div>
      <div className="loading-box"></div>
      <div className="loading-box"></div>
    </div>
  }

  export default React.memo(LoginLoading);