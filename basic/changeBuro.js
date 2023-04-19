function changeBureau(input){
    let bitCoin = Number(input[0]);
    let yuana = Number(input[1]);
    let commision = Number(input[2]);

    let bitCoinRate = 1168;
    let dolar = 1.76;
    let yuanaRate = 0.15 * dolar;
    let euro = 1.95;

    let sum = 0;

    sum = (bitCoin * bitCoinRate + (yuana * yuanaRate)) / euro;
    sum = sum - (sum * (commision / 100));
    
    console.log(`${sum.toFixed(2)}`);
}

changeBureau(["20","5678","2.4"  ]);
