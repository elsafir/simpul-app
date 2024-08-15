export default function handler(req, res) {
    const messages = [
      { id: 1, sender: 'John Doe', content: 'Hello, how are you?' },
      { id: 2, sender: 'Jane Smith', content: 'Can we meet tomorrow?' },
      // Tambah data dummy lainnya
    ];
    res.status(200).json(messages);
  }
  