import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: 'dahaladit61@gmail.com', // Your email where you'll receive emails
            from: 'dahaladeet16@gmail.com', // your website email address here
            subject: 'FeedBack from portfolio',
            html: `<!DOCTYPE html>
            <html lang="en">
            <body>
                <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${req.body.fullname}</h3>
                    <div style="font-size: 16px;">
                    <p>Email: ${req.body.email}</p>
                    <p>Message: ${req.body.message}</p>
                    <p></p>
                    <br>
                    </div>
            </body>
            </html>`,
        });
    } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: '' });
    // }
}

export default sendEmail;
