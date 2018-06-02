import gql from 'graphql-tag';

export const GET_TODOS = gql`
  {
    todos {
      _id
      title
      isChecked
    }
  }
`;

export const GET_TODO = gql`
  query GET_TODO($id: ID!) {
    todo(_id: $id) {
      _id
      title
      isChecked
    }
  }
`;
