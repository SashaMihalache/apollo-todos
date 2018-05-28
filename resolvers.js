import Todo from './models/Todo';

const resolvers = {
  Query: {
    async todo(parent, { _id }) {
      const todo = await Todo.findById({ _id });
      return todo;
    },
    async todos() {
      const todos = await Todo.find();
      return todos;
    }
  },
  Mutation: {
    async createTodo(parent, { input }) {
      const todo = await Todo.create(input);
      return todo;
    }
  }
}

export default resolvers;