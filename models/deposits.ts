import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const depositsScheme = new mongoose.Schema(
    {
        userid: String,
        amount: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

// delete mongoose.models.Packages;
const Deposits = mongoose.models.Deposits || mongoose.model('Deposits', depositsScheme);
export default Deposits;
