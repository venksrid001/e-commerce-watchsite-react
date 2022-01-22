import watchMessage from "../models/watchMessage.js"

export const getWatches = async (req, res) => {
    try {
        const watchMessages = await watchMessage.find();

        res.status(200).json(watchMessages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }   
}

export const createWatch = async (req, res) => {
    const watch = req.body;

    const newWatch = new watchMessage(watch);
    try {
        await newWatch.save();

        res.status(201).json(newWatch);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


