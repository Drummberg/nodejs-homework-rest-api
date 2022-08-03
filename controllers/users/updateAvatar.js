const { User } = require('../../models');
const path = require("path");
const fs = require("fs/promises");
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = async (req, res) => {
    try {
        const {_id} = req.user;
        const { path: tempPath, originalname } = req.file;
        const imageName = `${_id}_${originalname}`;
        const avatar = await Jimp.read(tempPath);
        await avatar.resize(250, 250).write(tempPath);
        const uploadPath = path.join(avatarDir, imageName);
        await fs.rename(tempPath, uploadPath);
        const avatarURL = path.join('public', 'avatars', imageName);
        await User.findByIdAndUpdate(_id, { avatarURL });
        res.json({avatarURL});
    }
    catch (error) {
        await fs.unlink(req.file.path);
        throw error;
    }
    
    

};

module.exports = updateAvatar;