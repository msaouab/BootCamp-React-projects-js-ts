import React from 'react';
import styled from 'styled-components'

const LoadingStyle = styled.div`
.loading-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-page-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-page-text {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}`;

const LoadingPage: React.FC = () => {
  return (
	<LoadingStyle>
    <div className="loading-page-container">
      <div className="loading-page-spinner"></div>
      <p className="loading-page-text">Loading...</p>
    </div>
	</LoadingStyle>
  );
};

export default LoadingPage;