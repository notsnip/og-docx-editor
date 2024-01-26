import React from "react";

const postRequest = async (url, body) => {
  try {
    const query = await fetch(url, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await query.json();
  } catch (error) {
    console.error(error);
  }
};

export default postRequest;
