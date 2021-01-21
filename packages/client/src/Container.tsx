import { gql, useQuery } from '@apollo/client';

const GET_TASK = gql`
  query GetTask($id: String!) {
    getTask(id: $id) {
      _id
      data {
        tags
        title
        description
      }
      children
      creator
      createdAt
    }
  }
`;

function Container() {
  const { data, loading } = useQuery(GET_TASK, {
    variables: {
      id: '096f52e4-2be1-44c7-b66b-0e257e5e5ebe'
    }
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log('data: ', data);

  return <h1>Hello World!</h1>;
}

export default Container;
