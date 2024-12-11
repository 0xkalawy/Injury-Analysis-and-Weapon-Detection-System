document.getElementById('woundForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const photoInput = document.getElementById('photoInput').files[0];
    if (!photoInput) {
      alert('Please upload a photo');
      return;
    }
  
    const formData = new FormData();
    formData.append('photo', photoInput);
  
    try {
      const response = await fetch('http://your-backend-url/identify', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Server error');
      }
  
      const data = await response.json();
      document.getElementById('response').textContent = `Identified Weapon: ${data.weapon}`;
    } catch (error) {
      console.error(error);
      document.getElementById('response').textContent = 'An error occurred. Please try again.';
    }
  });
  