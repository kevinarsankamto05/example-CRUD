const { address, profiles } = require("../models");

module.exports = {
  alamat: async (req, res) => {
    let { provinsi, kab_kota, kecamatan, detail, id_profiles } = req.body;
    id_profiles = parseInt(id_profiles);

    try {
      const response = await address.create({
        data: {
          provinsi: provinsi,
          kab_kota: kab_kota,
          kecamatan: kecamatan,
          detail: detail,
          profile: {
            connect: { id: id_profiles },
          },
        },
      });
      return res.status(201).json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        error,
      });
    }
  },
};
