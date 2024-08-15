export default function handler(req, res) {
    const todos = [
      { id: 1, task: 'Complete the project', completed: false },
      { id: 2, task: 'Prepare for the meeting', completed: true },
      // Tambah data dummy lainnya
    ];
    res.status(200).json(todos);
  }
  