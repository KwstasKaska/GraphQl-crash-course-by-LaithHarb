const Category = {
  animals: (parent, args, ctx) => {
    return animals.filter((animal) => {
      return animal.category === parent.id;
    });
  },
};

module.exports = Category;
