// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Hello, Tailwind!</h1>
        <p className="text-gray-600 mb-6">
          This is a simple page using Tailwind CSS in React.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition">
          Click Me
        </button>
      </div>
    </div>
  );
}
