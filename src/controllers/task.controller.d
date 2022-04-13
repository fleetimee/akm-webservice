import Task from "../models/Task.d";
import Person from "../models/Person.d";
import { Errors } from "../utils/errors";

// function create(req, res) {
//   Task.create({
//     title: req.body.title,
//     complete: false,
//     userId: req.body.userId,
//   })
//     .then((task) => {
//       return res.status(200).json(task);
//     })
//     .catch((error) => {
//       return res.status(400).json(error);
//     });
// }

// module.exports = { create };

let taskController = {
  add: async (req, res) => {
    try {
      const task = await Task.create({
        title: req.body.title,
        complete: false,
        personId: req.body.personId,
      });
      return res.status(200).json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const task = await Task.findAll({
        include: [
          {
            model: Person,
            as: "tasks",
          },
        ],
      });
      return res.status(200).json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default taskController;
