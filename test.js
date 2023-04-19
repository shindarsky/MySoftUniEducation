function travelTime(travelOptions) {

    let destinations = getDestinations(travelOptions);
    let sortedDestinationsByName = Object.entries(destinations).sort(Intl.Collator().compare);

    for (const [country, townInfo] of sortedDestinationsByName) {

        let result = [];
        result.push(country);
        for (const town in townInfo) {
            result.push(town, townInfo[town]);
        }

        result.length === 3 ?
            console.log(result.join(' -> ')) :
            console.log(getResWithSeveralTowns(result));

        function getResWithSeveralTowns(townAndPrice) {
            let resWithSeveralTowns = [];
            let country = result.shift();
            let tempArr = [];

            for (let i = 0; i < result.length; i += 2) {

                let town = result[i];
                let price = result[i + 1];
                let townAndPrice = [];

                townAndPrice.push(town, price);
                tempArr.push(townAndPrice);
            }

            let sortedArray = tempArr.sort(([keyA, valueA], [keyB, valueB]) => valueA - valueB);

            for (let [town, price] of sortedArray) {
                let townPrice = [town, price];
                resWithSeveralTowns.push(townPrice.join(' -> '));
            }
            resWithSeveralTowns.unshift(country + ' ->');
            return resWithSeveralTowns.join(' ');
        }

    }

    function getDestinations(destination) {
        let destinations = {};

        travelOptions.forEach((line) => {
            let [country, town, price] = line.split(' > ');

            if (!destinations.hasOwnProperty(country)) {
                destinations[country] = {};
            }

            if (!destinations[country].hasOwnProperty(town)) {
                destinations[country][town] = price;
            } else {

                if (price < destinations[country][town]) {
                    destinations[country][town] = price;
                }

            }
        })
        return destinations;
    }
}