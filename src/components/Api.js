import React, { useEffect, useState } from 'react';

function Api() {

  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const loadPosts = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/orzel-bielik/test/posts');
      if (response.ok) {
        setPosts(await response.json());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }



  return (
    <div className="api"> 
    <div class="top-table">
      <a href="#">Date</a>
      <a href="#">Title</a>
      <a href="#">Post</a>
    </div>

      <div className="table-options">
      <div className="list-of-blogs"><h3>List of Blogs</h3></div> <div><p className="filter-by">filter by</p></div>
      <select value={status} onChange={handleStatusChange}>
        <option value="published">published</option>
        <option value="draft">draft</option>
        <option value="deactivated">deactivated</option>
      </select>
      <select value={date} onChange={handleDateChange}>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2020">2020</option>
      </select></div>
      {posts
        .filter((post) => {
          if (date || status) {
            const [postDate] = post.date.split(' ');
            return post.status === status || (new Date(postDate)).getFullYear() === +date;
          }
          return true;
        }).
        map((post) => {
          const [postDate] = post.date.split(' ');
          return (
            <div key={post._id}>

            <table>
              
            <tbody>
                <tr>
                   <td className="table-dates">{new Date(postDate).toLocaleDateString()}</td>
                   <td className="table-post">{post.title}</td>
                   <td className="table-status">{post.status}</td>
                </tr>
              </tbody>
            </table>
            </div>
          )
        })}
    </div>
  );
}

export default Api;