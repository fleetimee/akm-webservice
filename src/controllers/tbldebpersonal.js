import Tbl_referensi from "../models/Tbl_referensi";
import Tbl_debpersonal from "../models/Tbl_deppersonal";

let tbldebpersonalController = {
  add: async (req, res) => {
    const no_deb = req.body.no_deb;
    const nik = req.body.nik;
    const kd_agama = req.body.kd_agama;
    const tempat_lahir = req.body.tempat_lahir;
    const jenis_kelamin = req.body.jenis_kelamin;
    const kd_status_kawin = req.body.kd_status_kawin;
    const kd_pendidikan = req.body.kd_pendidikan;
    const ket_pendidikan = req.body.ket_pendidikan;
    const kd_penduduk = req.body.kd_penduduk;
    const kd_pekerjaan = req.body.kd_pekerjaan;
    const ket_pekerjaan = req.body.ket_pekerjaan;
    const jmlh_penghasilan = req.body.jmlh_penghasilan;
    const npwp = req.body.npwp;
    const kd_bid_usaha_tmp_bekerja = req.body.kd_bid_usaha_tmp_bekerja;
    const alamat_tempat_bekerja = req.body.alamat_tempat_bekerja;
    const kd_instansi = req.body.kd_instansi;
    const nama_ibu_kandung = req.body.nama_ibu_kandung;
    const nik_pasangan = req.body.nik_pasangan;
    const nama_pasangan = req.body.nama_pasangan;

    const foundKawin = await Tbl_referensi.findOne({
      where: {
        group_id: "SKW",
        ref: kd_status_kawin,
      },
    });

    const foundPenduduk = await Tbl_referensi.findOne({
      where: {
        group_id: "",
        ref: kd_penduduk,
      },
    });

    const foundInstansi = await Tbl_referensi.findOne({
      where: {
        group_id: "",
        ref: kd_instansi,
      },
    });

    const foundPendidikan = await Tbl_referensi.findOne({
      where: {
        group_id: "PDK",
        ref: kd_pendidikan,
      },
    });

    const foundAgama = await Tbl_referensi.findOne({
      where: {
        group_id: "AGM",
        ref: kd_agama,
      },
    });

    const foundKelamin = await Tbl_referensi.findOne({
      where: {
        group_id: "KLM",
        ref: jenis_kelamin,
      },
    });

    if (!foundAgama) {
      return res.status(404).json({ message: "Agama tidak ditemukan" });
    }

    if (!foundKelamin) {
      return res.status(404).json({ message: "Kelamin tidak ditemukan" });
    }

    if (!foundKawin) {
      return res.status(404).json({ message: "Status kawin tidak ditemukan" });
    }

    if (!foundPenduduk) {
      return res.status(404).json({ message: "Penduduk tidak ditemukan" });
    }

    if (!foundPendidikan) {
      return res.status(404).json({ message: "Pendidikan tidak ditemukan" });
    }

    if (!foundPekerjaan) {
      return res.status(404).json({ message: "Pekerjaan tidak ditemukan" });
    }

    try {
      await Tbl_debpersonal.create({
        no_deb: no_deb,
        nik: nik,
        kd_agama: foundAgama.ref,
        tempat_lahir: tempat_lahir,
        tgl_lahir: tgl_lahir,
        jenis_kelamin: foundKelamin.ref,
        kd_status_kawin: foundKawin.ref,
        kd_pendidikan: foundPendidikan.ref,
        ket_pendidikan: ket_pendidikan,
        kd_penduduk: foundPenduduk.ref,
        kd_pekerjaan: foundPekerjaan.ref,
        ket_pekerjaan: ket_pekerjaan,
        jmlh_penghasilan: jmlh_penghasilan,
        npwp: npwp,
        alamat_tempat_bekerja: alamat_tempat_bekerja,
        kd_instansi: kd_instansi,
        nama_ibu_kandung: nama_ibu_kandung,
        nik_pasangan: nik_pasangan,
        nama_pasangan: nama_pasangan,
        kd_bid_usaha_tmp_bekerja: kd_bid_usaha_tmp_bekerja,
      });
      res.status(200).json({ message: "Added successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: Errors.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    try {
      const tbldebpersonal = await Tbl_debpersonal.findAll({
        include: [
          {
            model: Tbl_referensi,
            as: "agama",
          },
        ],
      });
      res.status(200).json(tbldebpersonal);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error" });
    }
  },
};

export default tbldebpersonalController;
