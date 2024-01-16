class apiError extends Error{
    constructor(statusCode,message = 'An error occurred',errors= []){                                                                                            
        super(message);
        this.statusCode= statusCode;
        this.data= null;
        this.message= message;
        this.success= false;
        this.errors= errors;
    }
}

export default apiError;

