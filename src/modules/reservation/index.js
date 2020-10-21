let arr = [];

module.exports = {
  index: (req, res) => {
    return res.json({ message: "reservation section!!" });
  },
  create: (req, res) => {
    const { name, cpf, email, dateIn, dateOut } = req.body;

    const project = {
      name,
      cpf,
      email,
      dateIn,
      dateOut,
    };

    arr.push(project);

    return res.status(200).json(arr);
  },
  read: (req, res) => {
    return res.status(200).json(arr);
  },
};
