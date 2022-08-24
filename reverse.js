let n=0;
let i,l;
for(l=2; l<=100; l++)
{
    for(i=1; i<=l; i++)
    {
        if(l%i==0)
        n++;
    }
    if(n==2)
    console.log(`<h1>${l}</h1>`);
    n=0;
}