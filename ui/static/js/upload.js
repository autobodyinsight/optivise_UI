document.querySelector('.upload-btn').addEventListener('click', () => {
  document.getElementById('pdf-upload').click();
});

document.getElementById('pdf-upload').addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file || !file.name.endsWith('.pdf')) return;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch('https://optivise.onrender.com/upload', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    document.getElementById('result').textContent = JSON.stringify(data.suggestions, null, 2);
  } catch (err) {
    document.getElementById('result').textContent = `Upload failed: ${err.message}`;
  }
});