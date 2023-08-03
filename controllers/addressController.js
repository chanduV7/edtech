const Address = require("../modal/addressModel");
const Users = require("../modal/user_modal");

const  addAddress = async(req) => {
    const AddressData = await Address.create(req.body);
    const addressId = AddressData._id;
    const userUpdate = await Users.findOneAndUpdate( { _id : req.userId },
    {$push: {
        address : addressId
    }},
    {
        new : true
    }
    );
    return AddressData 
}

const getUsersAddress = async(req) => {
    const userData = await Users.findById(req.userId)
    const addressIds = userData.address;
    const addPromise = addressIds.map(e => Address.findById(e))
    return Promise.allSettled(addPromise)
}

const updateAddress =async(req) => {
    return Address.findOneAndUpdate( {_id: req.params.addressId} , req.body,
         {new:true})
}

const  deleteAddress = async(req) => {
    return Address.findOneAndDelete( { _id: req.params.addressId})
}


module.exports = { addAddress,
                  getUsersAddress,
                 updateAddress,
                 deleteAddress}