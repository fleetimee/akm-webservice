import { as } from "pg-promise";
import * as Yup from "yup";
import Tbl_grup from "../models/Tbl_grup";
import { Errors } from "../utils/errors";

let tbl_grupController = {
  add: async (req, res) => {
    try {
      const schema = Yup.object().shape({
        GRUP_ID: Yup.number().required(),
        GRUP_NAME: Yup.string().required(),
        GRUP_DISKRIPSI: Yup.string(),
      });

      if (!(await schema.isValid(req.body)))
        return res.status(400).json({ error: Errors.VALIDATION_FAILS });

      const { GRUP_NAME } = req.body;

      const grupnameExist = await Tbl_grup.findOne({
        where: { GRUP_NAME },
      });

      if (grupnameExist)
        return res.status(400).json({ error: Errors.GRUPNAME_ALREADY_EXISTS });

      const tbl_grup = await Tbl_grup.create(req.body);

      return res.status(200).json(tbl_grup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  find: async (req, res) => {
    try {
      const tbl_grup = await Tbl_grup.findByPk(req.params.id);

      if (!tbl_grup)
        return res.status(400).json({ error: Errors.NONEXISTENT_GRUP });

      return res.status(200).json(tbl_grup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const tbl_grup = await Tbl_grup.findAll();

      return res.status(200).json(tbl_grup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const schema = Yup.object().shape({
        GRUP_NAME: Yup.string(),
        GRUP_DISKRIPSI: Yup.string(),
      });

      if (!(await schema.isValid(req.body)))
        return res.status(400).json({ error: Errors.VALIDATION_FAILS });

      const tbl_grup = await Tbl_grup.findByPk(req.params.id);

      if (!tbl_grup)
        return res.status(400).json({ error: Errors.NONEXISTENT_GRUP });

      await tbl_grup.update(req.body);

      return res.status(200).json(tbl_grup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      const tbl_grup = await Tbl_grup.findByPk(req.params.id);

      if (!tbl_grup)
        return res.status(400).json({ error: Errors.NONEXISTENT_GRUP });

      await tbl_grup.destroy();

      return res.status(200).json({ message: "Grup deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default tbl_grupController;
