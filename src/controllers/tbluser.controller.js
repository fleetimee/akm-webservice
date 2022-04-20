import Tbl_grup from "../models/Tbl_grup";
import Tbl_kantor from "../models/Tbl_kantor";
import Tbl_menu from "../models/Tbl_menu";
import Tbl_user from "../models/Tbl_user";
import { Errors } from "../utils/errors";

let tbluserController = {
  add: async (req, res) => {
    try {
      const tbluser = await Tbl_user.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        nama_lengkap: req.body.nama_lengkap,
        grupId: req.body.grupId,
        kantorId: req.body.kantorId,
      });
      return res.status(200).json({ message: "", tbluser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const tbluser = await Tbl_user.findAll({
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
          {
            model: Tbl_kantor,
            as: "kantor",
          },
        ],
      });
      return res.status(200).json(tbluser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  find: async (req, res) => {
    try {
      const tbluser = await Tbl_user.findOne({
        where: {
          id: req.params.id,
        },
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
          {
            model: Tbl_kantor,
            as: "kantor",
          },
        ],
      });
      return res.status(200).json(tbluser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const tbluser = await Tbl_user.update(
        {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          nama_lengkap: req.body.nama_lengkap,
          grupId: req.body.grupId,
          kantorId: req.body.kantorId,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).json(tbluser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      const tbluser = await Tbl_user.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(tbluser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default tbluserController;
