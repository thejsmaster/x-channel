import { useEffect } from "react";

interface Channel {
  [key: string]: ((data: any) => void)[];
}

const channels: Channel = {};

export const postMessage = (channelName: string, ...props: any) => {
  const channelCallbacks = channels[channelName] || [];
  channelCallbacks.forEach((cb: Function) => {
    cb(...props);
  });
};

export const useXChannel = (
  channelName: string,
  callback?: (...props: any[]) => void
) => {
  if (!channels[channelName]) {
    channels[channelName] = [];
  }

  const post = (...props: any) => {
    const channelCallbacks = channels[channelName] || [];
    channelCallbacks.forEach((cb: Function) => {
      cb !== callback && cb(...props);
    });
  };

  useEffect(() => {
    if (callback) {
      channels[channelName].push(callback);
    }

    return () => {
      if (callback) {
        const index = channels[channelName].indexOf(callback);
        if (index !== -1) {
          channels[channelName].splice(index, 1);
        }
      }
    };
  }, [channelName, callback]);

  return post;
};
export const getListenerCount = (ChannelName: string) => {
  return channels[ChannelName]?.length || 0;
};
