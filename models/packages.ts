import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const packagesScheme = new mongoose.Schema(
    {
        name: String,
        description: String,
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

// delete mongoose.models.Packages;
const Packages = mongoose.models.Packages || mongoose.model('Packages', packagesScheme);
export default Packages;
