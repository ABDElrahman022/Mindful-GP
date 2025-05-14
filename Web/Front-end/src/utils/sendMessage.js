import authorizedFetch from "./authorizedFetch";

async function sendMessage(messageData) {
  try {
    const response = await authorizedFetch(
      "http://localhost:4000/api/v1/messages",
      {
        method: "POST",
        body: JSON.stringify(messageData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    console.log("Message sent successfully!", data);
    return data;
  } catch (error) {
    console.error("Error sending message:", error.message);
    alert(error.message);
    throw error;
  }
}

export default sendMessage;
