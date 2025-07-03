import { useState, useEffect } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [form, setForm] = useState({ title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await api.get('/notes');
    setNotes(res.data);
    if (res.data.length > 0) setSelectedNote(res.data[0]);
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();

    try {
      if (isEditing && selectedNote?._id) {
        await api.put(`/notes/${selectedNote._id}`, form);
      } else {
        const res = await api.post('/notes', form);
        console.log('Created note:', res.data);
        setSelectedNote(res.data);
      }
      setForm({ title: '', content: '' });
      setIsEditing(false);
      fetchNotes();
    } catch (err) {
      console.error('Error saving note:', err);
      alert('Failed to save note. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    await api.delete(`/notes/${id}`);
    setForm({ title: '', content: '' });
    setIsEditing(false);
    fetchNotes();
  };

  const handleEdit = () => {
    if (selectedNote) {
      setForm({ title: selectedNote.title, content: selectedNote.content });
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setForm({ title: '', content: '' });
    setIsEditing(false);
  };

  const handleNewNote = () => {
    setForm({ title: '', content: '' });
    setSelectedNote(null);
    setIsEditing(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex h-screen font-inter bg-[#1c1828] text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#2a203d] text-white p-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-400">My Notes</h2>
          <button onClick={logout} className="text-sm underline text-red-400 hover:text-red-300">Logout</button>
        </div>
        <button
          onClick={handleNewNote}
          className="w-full mb-4 bg-purple-600 hover:bg-purple-500 text-white py-2 px-3 rounded shadow text-sm"
        >
          + Add Note
        </button>
        <div className="space-y-2 overflow-y-auto h-[85vh] pr-1">
          {notes.map(note => (
            <div
              key={note._id}
              className={`p-3 rounded cursor-pointer transition-all duration-200 ${
                selectedNote?._id === note._id
                  ? 'border-2 border-purple-400 bg-[#3d315b] text-white'
                  : 'hover:bg-[#392c50]'
              }`}
              onClick={() => {
                setSelectedNote(note);
                setForm({ title: note.title, content: note.content });
                setIsEditing(false);
              }}
            >
              {note.title}
            </div>
          ))}
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-6 bg-[#1c1828]">
        {/* Selected Note */}
        {selectedNote && !isEditing && (
          <div className="mb-6 bg-[#2a203d] p-6 rounded-lg shadow-md border border-purple-400">
            <h3 className="text-2xl font-bold text-purple-400 mb-1">{selectedNote.title}</h3>
            <p className="text-gray-300 whitespace-pre-wrap">{selectedNote.content}</p>
            <div className="mt-4 space-x-4">
              <button
                onClick={handleEdit}
                className="text-sm text-blue-400 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(selectedNote._id)}
                className="text-sm text-red-400 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Add/Edit Note Form */}
        {(isEditing || !selectedNote) && (
          <form onSubmit={handleCreateOrUpdate} className="bg-[#2a203d] p-6 rounded-lg shadow-md space-y-3 max-w-xl border border-purple-700">
            <h3 className="text-lg font-semibold text-purple-400">
              {isEditing ? 'Edit Note' : 'Add New Note'}
            </h3>
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-600 bg-[#1c1828] text-white rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-purple-400"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              placeholder="Content"
              className="border border-gray-600 bg-[#1c1828] text-white rounded px-3 py-2 w-full h-32 resize-none focus:outline-none focus:ring focus:border-purple-400"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500 transition-colors text-white px-4 py-2 rounded shadow"
              >
                {isEditing ? 'Save Changes' : 'Add Note'}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-gray-400 hover:underline text-sm"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
