import Tbl_menu from "../models/Tbl_menu";
import Tbl_grup from "../models/Tbl_grup";
import { Errors } from "../utils/errors";
import { response } from "express";

let tblmenuController = {
  get: async (req, res) => {
    try {
      const tblmenu = await Tbl_menu.findAll({
        include: [
          {
            model: Tbl_grup,
            as: "grup",
            attributes: ["nama_grup"],
          },
        ],
        order: [["id", "ASC"]],
      });
      return res.status(200).json(tblmenu);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  find: async (req, res) => {
    try {
      const tblmenu = await Tbl_menu.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Tbl_grup,
            as: "grup",
            attributes: ["nama_grup"],
          },
        ],
      });
      return res.status(200).json(tblmenu);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  //   gruptomenu: async (req, res) => {
  //     const tblmenu = await Tbl_menu.findOne({
  //       where: { id: req.params.id },
  //     }).then((tblmenu) => {
  //       if (tblmenu) {
  //         return res.status(400).json({ message: "Menu tidak ditemukan" });
  //       }
  //     });

  //     tblmenu.addGrup(req.params.grupId, {
  //       through: {
  //         nama_kewenangan: req.body.nama_kewenangan,
  //       },
  //     });
  //   },
};

export default tblmenuController;
