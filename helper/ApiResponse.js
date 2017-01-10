/**
 * API response base model
 */
module.exports = {
    success:function(data){
        var retData = {};
        retData.error = 0;
        retData.message = "success";
        retData.result = data;
        return retData;
    },
    error:function(data){
        var retData = {};
        retData.error = 1;
       // if(data && data.message)
        //   retData.message = data.message;
        //else
            retData.message = "error";
        retData.result = data;
        return retData;
    }
};

