$("#formExemplo").validate({
    debug: true,
    rules:{
        txtemail: {
            required: true,
            email: true
        },
        txtnome: {
            required: true,
            rangelength: [5, 50],
        },
        txtfilhos: {
            min: 0,
            max: 10,
            number: true,
        },
        txtsalario: {
            step: 0.1,
            Range: [2000, 10000],
        },
        txtadmissao: {
            required: true,
            date: true,
        },
        txtsocial: {
            required: true,
            url: true,
        }
    }
});