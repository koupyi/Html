$("#formExemplo").validate({
    debug: true,
    rules:{
        txtemail: {
            required: true,
            email: true
        },
        txtnome: {
            required: true,
            rangelength: [2, 50],
        },
        txtidade: {
            min: 18,
            max: 100,
            required: true,
            //range: [18, 100],
        },
        }}
});