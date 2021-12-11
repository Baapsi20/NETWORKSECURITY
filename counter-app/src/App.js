import React, {useState} from 'react'
import Auth from './pages/auth';
import RedditPage from './pages/redditPage';

function App() {
  const [user, setUser] = useState('')

  return (
    <>
    {!user ?
      <Auth setUser={setUser} user={user} />
    :
      <RedditPage user={user} />
    }
    </>
  );
}

export default App;
