/*  Q6. You are workin, on an e-commerce platform. Write a JavaScript pro,ram that take' the payment
method ("credit", "debit", or "paypal") a' input and u'e' a 'witch 'tatement to determine and print the
proce''in, fee a''ociated with each payment method. For example, "credit" may have a proce''in, fee of
2%, "debit" 1.5%, and "paypal" 3%.    */



let paymentMethod = "credit";
switch (paymentMethod){
    case"credit":
    console.log("processing fee for credit payment: 2%");
    break;
    case"debit":
    console.log("processing fee for debit payment : 1.5%");
    case"paytm":
    console.log("Processing fee for paytm payment: 3%");
    break;
    default:
        console.log("invalid pay menthod");

}

//output   processing fee for credit payment: 2%