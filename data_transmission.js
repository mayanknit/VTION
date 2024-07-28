// data_transmission.js
const axios = require('axios');

const sendData = async (data) => {
  try {
    const response = await axios.post('https://your-dashboard-url.com/api/data', data);
    console.log('Data sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

const sampleData = {
  deviceId: 'unique-device-id',
  timestamp: new Date().toISOString(),
  eventType: 'content_playback',
  data: {
    programName: 'Example Program',
    episodeName: 'Example Episode',
    duration: '30 minutes',
  },
};

sendData(sampleData);
