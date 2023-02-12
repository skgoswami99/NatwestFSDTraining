function ValidateNum(num)
{
    if (num >= 100) 
    {
        return false;
    }
    else if( num <= 10)
    {
        return false;
    }
    else 
    {
        return true;
    }
        
}

module.exports = {ValidateNum};