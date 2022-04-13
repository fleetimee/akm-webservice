import Tbl_grup from "../models/Tbl_grup";
import Tbl_user from "../models/Tbl_user";
import { Errors } from "../utils/errors";

let tbluserController = {
  add: async (req, res) => {
    try {
      const tbluser = await Tbl_user.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        grupId: req.body.grupId,
      });
      return res.status(200).json(tbluser);
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
          },
        ],
      });
      return res.status(200).json(tbluser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },
};

export default tbluserController;
