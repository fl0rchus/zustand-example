import { useEffect } from "react";
import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";

function App() {
  const { title, count, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, getPosts, clearStore, multiply } = useCounterStore();

  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <div>
      {title}: {count}
      <button onClick={() => increment(10)}>Increment by 10</button>
      <button onClick={() => multiply(2)}>Multiply by 2</button>
      <button onClick={() => clearStore()}>Clear Store</button>
      <hr />
      {JSON.stringify(posts)}
    </div>
  );
}

export default App;
