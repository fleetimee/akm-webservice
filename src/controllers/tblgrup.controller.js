import Tbl_grup from "../models/Tbl_grup";
import Tbl_kantor from "../models/Tbl_kantor";
import Tbl_user from "../models/Tbl_user";
import { Errors } from "../utils/errors";
import Tbl_menu from "../models/Tbl_menu";

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
            include: [
              {
                model: Tbl_kantor,
                as: "kantor",
              },
            ],
          },
          {
            model: Tbl_menu,
            as: "menu",
          },
        ],
        order: [["id", "ASC"]],
      });
      return res.status(200).json(tblgrup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  find: async (req, res) => {
    try {
      const tblgrup = await Tbl_grup.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Tbl_user,
            as: "user",
            include: [
              {
                model: Tbl_kantor,
                as: "kantor",
              },
            ],
          },
          {
            model: Tbl_menu,
            as: "menu",
          },
        ],
      });
      return res.status(200).json(tblgrup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const tblgrup = await Tbl_grup.update(
        {
          nama_grup: req.body.nama_grup,
          deskripsi: req.body.deskripsi,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).json({ message: "Data Berhasil Diupdate" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      const tblgrup = await Tbl_grup.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(tblgrup);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default tblgrupController;
