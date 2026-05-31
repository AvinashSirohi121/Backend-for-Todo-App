
const todoSchema = require("../schemas/todoSchema");

exports.createTodo = async(req,res)=>{
    try{

        const {title,description} = req.body;

        const todo = await todoSchema.create({title,description});
       return res.status(200).json({
            success:true,
            data:todo,
            message:'Todo create successfully'
        })


    }catch(error){
        console.error("Error in creating Todo =>",error);
       return res.status(500).json({
            success:false,
            message:error.message,
            error:"Internal Server Message"
        })
    }
}

exports.getTodo = async(req,res)=>{
    try{
        const todoData = await todoSchema.find({});
        if(!todoData){
          return  res.status(404).json({
                success:false,
                message:"No reords found"
            })
        }else{
          return  res.status(200).json({
                success:true,
                message:"Records found Successfully",
                data:todoData
            })
        }
    }catch(error){
        console.error("Error in finding Todo =>",error);
       return res.status(500).json({
            success:false,
            message:error.message,
            error:"Internal Server Message"
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        const {id} = req.params;
        const todoData = await todoSchema.findById({_id:id});
        if(!todoData){
           return res.status(404).json({
                success:false,
                message:`No reords found for Id : ${id}`
            })
        }else{
          return  res.status(200).json({
                success:true,
                message:"Record found Successfully",
                data:todoData
            })
        }
    }catch(error){
        console.error("Error in finding TodoById =>",error);
        return res.status(500).json({
            success:false,
            message:error.message,
            error:"Internal Server Message"
        })
    }
}

exports.editTodo = async(req,res)=>{
    try{
        const id = req.params.id;
        const {title,description} = req.body;

        const editedTodo = await todoSchema.findByIdAndUpdate(
            {_id:id},
            {$set:{title,description, lastUpdatedAt:Date.now()}},{new:true});
        if(!editedTodo){
          return  res.status(404).json({
                success:false,
                message:"Error in updating the Todo"
            })
        }else{
            return res.status(200).json({
                success:true,
                message:"Todo Updated successfully",
                data:editedTodo
            })
        }

    }catch(error){
        console.error("Error in edit TodoById =>",error);
        return res.status(500).json({
            success:false,
            message:error.message,
            error:"Internal Server Message"
        })
    }
}

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
    
        const deleteTodoData = await todoSchema.findByIdAndDelete({_id:id});

        if(!deleteTodoData){
             return res.status(404).json({
            success:false,
            message:"Todo not found",
        }) 
        }else{
             return res.status(200).json({
            success:true,
            message:"Todo deleted Successfully",
            data:deleteTodoData
        })
        }
       

    }catch(error){
        console.error("Error in delete TodoById =>",error);
        return res.status(500).json({
            success:false,
            message:error.message,
            error:"Internal Server Message"
        })
    }
}