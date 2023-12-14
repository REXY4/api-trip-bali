const { CustomerMessage } = require("../../models")

const createMessage = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            country,
            description,
        } = req.body;
        //BUATLAH SATU KONDISI DI MANA JIKA EMAIL GAGAL DI KIRIM, 
        //RESPONSE 400 DAN DATA TIDAK DI BUAT DI DATABASE
        //JIKA BERHASIL MENGIRIM EMAIL DATA LANGSUNG DI BUAT DI DALAM DATABASE;

        const response = await CustomerMessage.create({
            fullName,
            email,
            phone,
            country,
            description
        });

        res.status(200).send({
            statusCode: 200,
            status: "success",
            message: "create data success",
            data: response
        })
    } catch (error) {
        res.status(500).send({
            statusCode: 500,
            status: "error",
            message: "server error"
        })
    }
}



module.exports = {
    createMessage
}