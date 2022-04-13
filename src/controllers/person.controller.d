import req from "express/lib/request";
import Person from "../models/Person.d";
import Task from "../models/Task.d";
import { Errors } from "../utils/errors";

let personController = {
  add: async (req, res) => {
    try {
      const person = await Person.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      return res.status(200).json(person);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const person = await Person.findAll({
        include: [
          {
            model: Task,
            as: "tasks",
          },
        ],
      });
      return res.status(200).json(person);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  find: async (req, res) => {
    try {
      const person = await Person.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Task,
            as: "tasks",
          },
        ],
      });
      return res.status(200).json(person);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default personController;
