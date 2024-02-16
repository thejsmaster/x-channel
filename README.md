# x-channel

A simple utility for enabling communication between components using channels in React applications.

## Installation

You can install this package via npm:

```bash
npm install x-channel
```

## Usage

### useXChannel

The `useXChannel` hook provides a way to listen for messages on a specific channel. When a message is sent to that channel, the provided callback function will be invoked.

```javascript
import { useXChannel } from "x-channel";

useXChannel("myChannel", (message) => {
  console.log("Received a message:", message);
});
```

### getListenerCount

The `getListenerCount` function allows you to check how many listeners are currently registered for a specific channel.

```javascript
import { getListenerCount } from "x-channel";

const count = getListenerCount("myChannel");
console.log("Number of listeners for myChannel:", count);
```

### postMessage

The `postMessage` function allows you to send a message to a specific channel. It will notify all registered listeners for that channel.

```javascript
import { postMessage } from "x-channel";

postMessage("myChannel", "Hello, World!");
```

## Example

Here's a basic example of using these functions within a React component:

```javascript
import React from "react";
import { postMessage, useXChannel } from "x-channel";

function App() {
  const post = useXChannel("myChannel", (message) => {
    console.log("Received a message from Test:", message);
  });

  const sendMessage = () => {
    post("myChannel", "Hello, from App!");
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <Test />
    </div>
  );
}
function Test() {
  const post = useXChannel("myChannel", (message) => {
    console.log("Received a message from APP:", message);
  });

  const sendMessage = () => {
    post("myChannel", "Hello, from Test!");
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}
```

## License

This package is released under the [MIT License](LICENSE).
