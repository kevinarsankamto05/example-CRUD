const { users, profiles, address } = require("../models"),
  utils = require("../utils/encryption");

module.exports = {
  register: async (req, res) => {
    const { email, password, name, gender, phone } = req.body;
    const existingEmail = await users.findFirst({
      where: {
        email: email,
      },
    });

    if (existingEmail)
      return res
        .status(400)
        .json({ error: true, message: "Email already registered" });

    try {
      const data = await users.create({
        data: {
          email: email,
          password: await utils.cryptPassword(password),
          profiles: {
            create: {
              name: name,
              gender: gender,
              phone: phone,
              image: `/images/${req.file.filename}`,
            },
          },
        },
        include: {
          profiles: true,
        },
      });

      console.log(req.file);

      return res.status(201).json({
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
      });
    }
  },

  login: async () => {},

  getUsers: async (req, res) => {
    try {
      const user = await users.findMany({
        include: {
          profiles: true,
          // address: true,
        },
      });

      const response = user.map((user) => ({
        id: user.id,
        email: user.email,
        password: user.password,
        profiles: {
          name: user.profiles.name,
          gender: user.profiles.gender,
          phone: user.profiles.phone,
          image: user.profiles.image,
        },
        // address: user.address.map((address) => ({
        //   provinsi: address.provinsi,
        //   kab_kota: address.kab_kota,
        //   kecamatan: address.kecamatan,
        //   detail: address.detail,
        // })),
      }));

      return res.status(200).json({
        error: false,
        message: "Successfully fetched data all user",
        data: response,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ error: true, message: "Internal Server Error" });
    }
  },

  changePassword: async () => {},
};
