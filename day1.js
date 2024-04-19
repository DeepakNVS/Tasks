//first 100 even numbers using for loop,while,dowhile

//For Loop
for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  //Do While Loop
var i = 0;
do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
} while (i < 100);

//While Loop
var i = 0;
while (i < 100) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

//1-100 (even print ) using for loop,while,dowhile

//while loop
var i=1 
while (i<=100){
  if(i%2==0){
  console.log(i)
  }
  i++
}

//for loop
var i 
for(i=1;i<=100;i++){
  if(i%2==0){
  console.log(i)
}
}

//do-while loop
var i = 1;
do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);

//if user is giving value var x=4; then you have print factors of 4

var i=4;
var j;
for(j=1;j<=4;j++){
  if(i%j==0){
    console.log(j)
  }
}

//if we a have number var x =3;  if x is prime or not

var n = 3;
var prime = 0;
for (var j = 2; j < n; j++) {
    if (n % j == 0) {
        prime++;
        break;
    }
}
if (prime == 0)
    console.log(n + " is a prime number");
else
    console.log(n + " is not a prime number");

// fibonacci series
var a=0,b=1; 
 console. log(a); console. log(b);
 for(var i=1;i<=10;i++){
  var sum=a+b;
   console. log(sum); 
   a=b; 
   b=sum;
}

//12345 pattern in asterick
for(var i=5;i>=1;i--)
{
  var s="";
  for(var j=1;j<=i;j++)
  {
    s="*"+s;
  }
  console.log(s);
}

for(var i=5;i>=1;i--)
{
  var s="";
  for(var j=1;j<=i;j++)
  {
    s=j+s;
  }
  console.log(s);
}