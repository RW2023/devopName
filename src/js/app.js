// Function to outline title text on the document
document.addEventListener('DOMContentLoaded', () => {
  const titleElements = document.querySelectorAll('.title');

  titleElements.forEach(element => {
    element.classList.add('outlinedText');
  });
});

// Declare an async function to fetch data
async function fetchData() {
  try {
    const response = await fetch('https://discord.com/api/guilds/1061557042806009927/widget.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Use the fetchData function to get the data and destructure it
(async () => {
  const data = await fetchData();

  if (data) {
    // Destructure the data as needed
    const { id, name, instant_invite, presence_count } = data;

    // Use the destructured data
    console.log('Guild ID:', id);
    console.log('Guild Name:', name);
    console.log('Instant Invite:', instant_invite);
    console.log('Presence Count:', presence_count);
  }
})();


