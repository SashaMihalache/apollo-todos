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
