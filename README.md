# React Channel Communication

A simple utility for enabling communication between components using channels in React applications.

## Installation

You can install this package via npm:

\`\`\`bash
npm install react-channel-communication
\`\`\`

## Usage

### \`postMessage(channelName: string, ...props: any[])\`

The \`postMessage\` function allows you to send a message to a specific channel. It will notify all registered listeners for that channel.

\`\`\`javascript
import { postMessage } from 'react-channel-communication';

postMessage('myChannel', 'Hello, World!');
\`\`\`

### \`useXChannel(channelName: string, callback: Function)\`

The \`useXChannel\` hook provides a way to listen for messages on a specific channel. When a message is sent to that channel, the provided callback function will be invoked.

\`\`\`javascript
import { useXChannel } from 'react-channel-communication';

useXChannel('myChannel', (message) => {
console.log('Received a message:', message);
});
\`\`\`

### \`getListenerCount(channelName: string)\`

The \`getListenerCount\` function allows you to check how many listeners are currently registered for a specific channel.

\`\`\`javascript
import { getListenerCount } from 'react-channel-communication';

const count = getListenerCount('myChannel');
console.log('Number of listeners for myChannel:', count);
\`\`\`

## Example

Here's a basic example of using these functions within a React component:

\`\`\`javascript
import React from 'react';
import { postMessage, useXChannel } from 'react-channel-communication';

function MyComponent() {
useXChannel('myChannel', (message) => {
console.log('Received a message:', message);
});

const sendMessage = () => {
postMessage('myChannel', 'Hello, from MyComponent!');
};

return (
<div>
<button onClick={sendMessage}>Send Message</button>
</div>
);
}
\`\`\`

## License

This package is released under the [MIT License](LICENSE).
