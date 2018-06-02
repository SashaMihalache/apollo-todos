import gql from 'graphql-tag';

export const CREATE_TODO = gql`
  mutation CREATE_TODO($title: String!) {
    createTodo(input: { title: $title }) {
      _id
      title
      isChecked
    }
  }
`;
