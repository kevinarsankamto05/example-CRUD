const { profiles, address, users } = require("../models");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const profile = await profiles.findMany({
        include: {
          address: true,
        },
      });

      if (!user)
        return res.status(404).json({
          error: true,
          message: "User Not Found",
        });

      const response = profile.map((profile) => ({
        data: {
          id: profile.id,
          name: profile.name,
          gender: profile.gender,
          phone: profile.phone,
          image: profile.image,
          address: {
            provinsi: profile.address.provinsi,
            kab_kota: profile.address.kab_kota,
            kecamatan: profile.address.kecamatan,
            detail: profile.address.detail,
          },
        },
      }));

      return res.status(200).json({
        error: false,
        message: "Successfully fetched data all Profile",
        data: response,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      return res
        .status(500)
        .json({ error: true, message: "Internal Server Error" });
    }
  },

  deleteProfile: async (req, res) => {},
};
