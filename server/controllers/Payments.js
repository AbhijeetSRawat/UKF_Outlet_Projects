const {instance} = require ("../config/razorpay");
const Item = require("../models/Items");
const User = require("../models/User")

const {default : mongoose} = require ("mongoose");


exports.createPayment = async (req,res)=>{
    const {item_id} = req.body;
    const userId = req.user.id;

    //item id check 
    if(!item_id){
        return res.status(400).json({
            success:false,
            message:'Please provide valid item id',
        });
    }

    let item;

    try{
        //check whether item exist or not
        item = await Item.findById(item_id);

        if(!item){
            return res.status(400).json({
                success:false,
                message:'Could not find the item'
            })
        }

    }
    catch(error){
        console.error(error);
        console.log("Item does not exist");
        return res.status(500).json({
        success:false,
        message:error.message
        });
    }

    const amount = item.price;
    const currency = "INR";

    const options = {
        amount : amount* 100,
        currency,
        reciept:Math.random(Date.now()).toString(),
        notes:{
            itemId:item_id,
            userId
        }
    };

    try{
        const paymentResponse = await instance.orders.create(options);
        console.log(paymentResponse);

        return res.status(200).json({
            success:true,
            itemName:item.itemName,
            itemDescription:item.itemDescription,
            thumbnail:item.thubnail,
            orderId:paymentResponse.id,
            currency: paymentResponse.currency,
            amount: paymentResponse.amount
        });
    }
    catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"could not initiate order",
        })
    }

}


exports.verifySignature = async(req,res)=>{
    const webhooksecret = "12345678"; //needs to be changed
    const signature = req.headers["x-razorpay-signature"];
    const shasum = crypto.createHmax("sha256",webhooksecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");

    if(signature === digest){
        console.log("Payment is Authorised");
        const{itemId,userId} = req.body.payload.payment.entity.notes;

        try{
            const itemSelected = await User.findOneAndUpdate(
                                                {_id:userId},
                                                {$push : {items : itemId}},
                                                {new:true},
                                            );

            if(!itemSelected){

                console.log("error while verifying the payment 1")

                return res.status(500).json({
                    success:false,
                    message:'User not found'
                })
            }

            return res.status(200).json({
                success:true,
                message:"Signature verified and item added",
            })
        }
        catch(error){
            console.log("error while verifying the payment 2")

                return res.status(500).json({
                    success:false,
                    message:error.message
                })
        }
    }
    else{
        return res.status(400).json({
                    success:false,
                    message:"Invalid request"
                })
        }
    }
