import { useEffect, useState } from 'react';
import Cards from '../components/Cards';

const Posts = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    fetch('https://codebuddy.review/posts')
      .then(res => res.json())
      .then(res => {
        const list = JSON.parse(JSON.stringify(res.data.posts));
        setPostList([...list]);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {postList.length >= 1 && postList.map(elem => <Cards key={elem.firstName} elem={elem} />)}
        </div>
      </div>
    </>
  );
};

export default Posts;
