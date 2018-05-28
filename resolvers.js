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
    },
    async updateTodo(parent, { _id, input }) {
      const todo = await Todo.findOneAndUpdate(
        { _id },
        input,
        { new : true }
      );
      return todo;
    },
    async removeTodo(parent, { _id }) {
      const todo = await Todo.findByIdAndRemove({ _id });
      return todo;
    }
  }
}

export default resolvers;