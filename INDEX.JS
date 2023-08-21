function ranking(winners, loses) {
    let win = winners - loses;
    if (win <= 10) {
        return `O seu level é: Ferro, pois você obteve ${win}`
    }else if (win >= 11 && win <= 20) {
        return `O seu level é: Bronze, pois você obteve ${win}`
    }else if (win >= 21 && win <= 50) {
        return `O seu level é: Prata, pois você obteve ${win}`
    }else if (win >= 51 && win <= 80) {
        return `O seu level é: Ouro, pois você obteve ${win}`
    }else if (win >= 81 && win <= 90) {
        return `O seu level é: Diamante, pois você obteve ${win}`
    }else if (win >= 91 && win <= 100) {
        return `O seu level é: Lendário, pois você obteve ${win}`
    }else{
        return `O seu level é: Imortal, pois você obteve ${win}`
    }
}

let player = ranking(1,2);
console.log(player);