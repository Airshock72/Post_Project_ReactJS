import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

import EditText from "react-editext";

const BootTables = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const onSave = (val) => {
    console.log(val);
  };
  return (
    <div>
      <h1>POST PROJECT REACT JS</h1>
      {posts.length > 0 ? (
        <ReactBootStrap.Table bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(({ id, title, body }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <EditText value={body} type="text" onSave={onSave} />
              </tr>
            ))}
          </tbody>
        </ReactBootStrap.Table>
      ) : (
        <ReactBootStrap.Spinner animation="grow" />
      )}
    </div>
  );
};

export default BootTables;
