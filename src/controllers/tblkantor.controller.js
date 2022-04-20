import Tbl_grup from "../models/Tbl_grup";
import Tbl_kantor from "../models/Tbl_kantor";
import Tbl_user from "../models/Tbl_user";
import Tbl_menu from "../models/Tbl_menu";
import { Errors } from "../utils/errors";

let tblkantorController = {
  add: async (req, res) => {
    try {
      const tblkantor = await Tbl_kantor.create({
        nama_kantor: req.body.nama_kantor,
        lokasi: req.body.lokasi,
        no_hp1: req.body.no_hp1,
        no_hp2: req.body.no_hp2,
      });
      return res.status(200).json(tblkantor);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const tblkantor = await Tbl_kantor.findAll({
        include: [
          {
            model: Tbl_user,
            as: "user",
            include: [
              {
                model: Tbl_grup,
                as: "grup",
                include: [
                  {
                    model: Tbl_menu,
                    as: "menu",
                    attributes: ["id", "nama_menu"],
                  },
                ],
              },
            ],
          },
        ],
      });
      return res.status(200).json(tblkantor);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  find: async (req, res) => {
    try {
      const tblkantor = await Tbl_kantor.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Tbl_user,
            as: "user",
            include: [
              {
                model: Tbl_grup,
                as: "grup",
                include: [
                  {
                    model: Tbl_menu,
                    as: "menu",
                    attributes: ["id", "nama_menu"],
                  },
                ],
              },
            ],
          },
        ],
      });
      return res.status(200).json(tblkantor);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const tblkantor = await Tbl_kantor.update(
        {
          nama_kantor: req.body.nama_kantor,
          lokasi: req.body.lokasi,
          no_hp1: req.body.no_hp1,
          no_hp2: req.body.no_hp2,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).json({ message: "Data Berhasil di update" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      const tblkantor = await Tbl_kantor.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ message: "Data Berhasil di hapus" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default tblkantorController;
