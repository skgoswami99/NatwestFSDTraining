function ValidateNum(num)
{
    if(num >= 100)
    {
        console.log("false from 1st condition");
        return false;
    }
    else if(num <= 10)
    {
        console.log("false from 2nd condition");
        return false;
    }
    else
    {
        console.log("false from else condition");
        return true;
    }
}


// module.exports = ValidateNum;
module.exports = {
    ValidateNum
}