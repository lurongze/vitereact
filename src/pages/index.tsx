import { useParams } from 'react-router-dom';

function IndexPage() {
  const params = useParams();
  console.log('params', params);
  return <div>Index Page</div>;
}

export default IndexPage;
