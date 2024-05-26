import React, { useState, useEffect } from "react";

interface QueueMessageProps {
  initialQueueNumber: number;
}

const QueueMessage: React.FC<QueueMessageProps> = ({ initialQueueNumber }) => {
  const [queueNumber, setQueueNumber] = useState(initialQueueNumber);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueueNumber((prevQueueNumber) =>
        prevQueueNumber > 20 ? prevQueueNumber - 1 : 20
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <span>Your request is {queueNumber} in queue.</span>;
};

export default QueueMessage;
