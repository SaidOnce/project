import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);

      // Проверка разрешений и подписка на push-уведомления
      if (Notification.permission === "default" || Notification.permission === "prompt") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            console.log("Notification permission granted.");
            subscribeUserToPush(registration);
          } else {
            console.log("Notification permission denied.");
          }
        });
      } else if (Notification.permission === "granted") {
        subscribeUserToPush(registration);
      }
    }).catch(error => {
      console.log('Service Worker registration failed:', error);
    });
  });
}

function subscribeUserToPush(registration) {
  registration.pushManager.getSubscription().then(subscription => {
    if (!subscription) {
      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array('YOUR_PUBLIC_KEY')
      });
    }
  }).then(subscription => {
    console.log('Subscribed to push notifications:', subscription);
  }).catch(error => {
    console.error('Push subscription failed:', error);
  });
}


function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
