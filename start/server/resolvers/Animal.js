const Animal = {
  category: (parent, args, ctx) => {
    return categories.find((category) => {
      return category.id === parent.category;
    });
  },
};

module.exports = Animal;
