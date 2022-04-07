import * as Yup from "yup";
import Debitur from "../models/Debitur";
import { Errors } from "../utils/errors";

let debiturController = {
  add: async (req, res) => {
    try {
      const schema = Yup.object().shape({
        nama_debitur: Yup.string().required(),
        alamat_debitur: Yup.string().required(),
        email: Yup.string().email().required(),
        no_hp: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body)))
        return res.status(400).json({ error: Errors.VALIDATION_FAILS });

      const debitur = await Debitur.create(req.body);

      return res.status(200).json(debitur);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const debitur = await Debitur.findAll();

      return res.status(200).json(debitur);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  find: async (req, res) => {
    try {
      const debitur = await Debitur.findByPk(req.params.id);

      return res.status(200).json(debitur);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const schema = Yup.object().shape({
        nama_debitur: Yup.string(),
        alamat_debitur: Yup.string(),
        email: Yup.string().email(),
        no_hp: Yup.string(),
      });

      if (!(await schema.isValid(req.body)))
        return res.status(400).json({ error: Errors.VALIDATION_FAILS });

      const debitur = await Debitur.findByPk(req.params.id);

      if (!debitur)
        return res.status(400).json({ error: Errors.NONEXISTENT_USER });

      await debitur.update(req.body);

      return res.status(200).json(debitur);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      const debitur = await Debitur.findByPk(req.params.id);

      if (!debitur)
        return res.status(400).json({ error: Errors.NONEXISTENT_USER });

      await debitur.destroy();

      return res.status(200).json({ message: "Debitur deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default debiturController;
