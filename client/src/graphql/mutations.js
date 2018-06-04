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

export const DELETE_TODO = gql`
  mutation DELETE_TODO($id: ID!) {
    removeTodo(_id: $id) {
      _id
      title
    }
  }
`;
