const Reservation = require('../../models/Reservations');
const Reservations = require('../../models/Reservations');

module.exports = {
  index: (req, res) => {
    return res.json({ message: "reservation section!!" });
  },
  create: async (req, res) => {
    try {
      const { name, cpf, email, dateIn, dateOut } = req.body;

      const reservations = await Reservations.create({
        name,
        cpf,
        email,
        dateIn,
        dateOut,
      });
  
      return res.status(200).json(reservations);
    } catch (error) {
      console.log(error)
    }

  },
  read: async (req, res) => {
    const reservations = await Reservation.findAll();

    return res.status(200).json(reservations);
  },
};
