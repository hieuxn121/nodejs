var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nguyenhieu12012000@gmail.com',
        pass: 'Hieund1201'
    }
});

var mailOptions = {
    from: 'nguyenhieu12012000@gmail.com',
    to: 'tungxtnd0@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'HiHiHiHi!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});