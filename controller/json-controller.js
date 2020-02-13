const db=require('../modules/database/mysqlDb');

let insertJson=async(req,res)=>{

    let data=req.body;
    
    console.log(data)

    let query=`insert into json_table(json_data) values(?)`;
    
    //we need to stringify to convert object into the json 
    data=JSON.stringify(data);
    
    db.queryAsync(query,data)
    .then((result) => {
        
        res.send({
            data:result,
            message:'data inserted successfully!',
            status:200   
        });
        
    }).catch((err) => {
        res.send(err);
    });
    
}


let getJsonData=async(req,res)=>{

    let query=`select * from json_table`;
    db.queryAsync(query)
    .then(result=>{
        res.send({
            status:200,
            message:'Data fetched successfully!',
            data:result
        })
    })
    .catch(err=>{
        res.send({
            status:500,
            message:'Server Error',
            data:err
        })
    });
}

let getCityName=async(req,res)=>{

    // ->> used to remove double quote from the city 
    let query=`select json_data->>'$.address.address.city' as city from json_table`;

    db.queryAsync(query)
    .then(result=>{
        res.send({
            status:200,
            message:'Data fetched successfully!',
            data:result
        })
    })
    .catch(err=>{
        res.send({
            status:500,
            message:'Server Error',
            data:err
        })
    });
}

let getPhoneNumber=async(req,res)=>{

    let query=`select json_data->>'$.phone[0]' as phone from json_table`;

    db.queryAsync(query)
    .then(result=>{
        res.send({
            status:200,
            message:'Data fetched successfully!',
            data:result
        })
    })
    .catch(err=>{
        res.send({
            status:500,
            message:'Server Error',
            data:err
        })
    });

}
module.exports={
    insertJson,
    getJsonData,
    getCityName,
    getPhoneNumber
}