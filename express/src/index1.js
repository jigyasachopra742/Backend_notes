function sum(...args)
{
    let s = 0;
    for(let i = 0; i < args.length; i++)
    {
        if(typeof(args[i]) === "number")
        {
            s+= args[i];
        }

        else if(args[i] === "null" || args[i] === "undefined")
        {
            return 0;
        }

        else if(typeof(args[i]) === "string")
        {
            let num = parseInt(args[i]);
            if(!isNaN(num))
            {
                s+= num;
            }
        }

        else if(Array.isArray(args[i]))
        {
            s+=sum(args[i]);
        }
    }

    return sum;
}

let x = sum(1,2,[3,4]);
console.log(x);

