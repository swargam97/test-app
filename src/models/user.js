const mongoose=require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    email:
    {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim: true
    },
    file:
    {
        type:Buffer
    }
    

})

module.exports = User