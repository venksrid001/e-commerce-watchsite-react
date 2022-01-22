import mongoose from 'mongoose';

const watchShema = mongoose.Schema({
    name: String,
    description: String,
    seller: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    listedAt: {
        type: Date,
        default: new Date()

    },
})

const watchMessage = mongoose.model('WatchMessage', watchShema)

export default watchMessage;