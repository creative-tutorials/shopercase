import { useState } from 'react';
// Do not change, remove or modify this file. 
// This file handles the main functionality of the application
// Incorrect changes to this file will result in the website being unavailable
export async function CheckInterentConnectivity() {
  const [isConnected, setisConnected] = useState(false);
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    if (response.ok) {
      const result = await response.json();
      setisConnected(true);
    }
    if (!response.ok) {
      const result = await response.json();
    }
  } catch (err) {
    // console.log(err);
    console.log("error");
    setisConnected(false);

  }
}
