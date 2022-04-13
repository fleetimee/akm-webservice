import req from "express/lib/request";
import res from "express/lib/response";
import Tbl_grup from "../models/Tbl_grup";
import Tbl_user from "../models/Tbl_user";
import { Errors } from "../utils/errors";

let tblgrupController = {
  add: async (req, res) => {
    try {
      const tblgrup = await Tbl_grup.create({
        nama_grup: req.body.nama_grup,
        deskripsi: req.body.deskripsi,
      });
      return res.status(200).json(tblgrup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const tblgrup = await Tbl_grup.findAll({
        include: [
          {
            model: Tbl_user,
            as: "user",
          },
        ],
      });
      return res.status(200).json(tblgrup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default tblgrupController;
