import Mst_debitur from "../models/Mst_debitur";
import { Errors } from "../utils/errors";

let mstdebiturController = {
  add: async (req, res) => {
    try {
      const mstdebitur = await Mst_debitur.create({
        nama_debitur: req.body.nama_debitur,
        alamat: req.body.alamat,
        email: req.body.email,
        no_telp: req.body.no_telp,
        no_ktp: req.body.no_ktp,
        no_selular: req.body.no_selular,
      });
      return res.status(200).json(mstdebitur);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const mstdebitur = await Mst_debitur.findAll();
      return res.status(200).json(mstdebitur);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  find: async (req, res) => {
    try {
      const mstdebitur = await Mst_debitur.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(mstdebitur);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  update: async (req, res) => {
    try {
      const mstdebitur = await Mst_debitur.update(
        {
          nama_debitur: req.body.nama_debitur,
          alamat: req.body.alamat,
          email: req.body.email,
          no_hp: req.body.no_hp,
          no_ktp: req.body.no_ktp,
          no_hp: req.body.no_hp,
          no_selular: req.body.no_selular,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).json({ message: "Update Success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  delete: async (req, res) => {
    try {
      const mstdebitur = await Mst_debitur.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({ message: "Delete Success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default mstdebiturController;
