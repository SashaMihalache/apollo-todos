const resolvers = {
  Query: {
    async hello() {
      return 'Hello world';
    }
  }
}

export default resolvers;