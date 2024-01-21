class apiResponse{
    constructor(statusCode,message,data,success=false){
        this.statusCode = statusCode;
        this.data= data;
        this.message= message;
        this.success= success;
    };
};
export default apiResponse;

