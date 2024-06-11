import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Home() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-xl font-semibold mb-4">Welcome, {username ? username : 'Guest'}!</h1>
        {!username && (
          <p>
            Please <a href="/login" className="text-blue-500">Log in</a> or <a href="/signup" className="text-blue-500">Sign up</a>.
          </p>
        )}
      </div>
    </div>
  );
}
