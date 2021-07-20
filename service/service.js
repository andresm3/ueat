
module.exports = class Service {

    value(r) {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }

    async convertRoman(roman) {
    
        console.log('>>roman: '+ JSON.stringify(roman));
        var res = 0;

        for (let i = 0; i < roman.length; i++) {
            var s1 = this.value(roman.charAt(i));
            if (i + 1 < roman.length) {
                var s2 = this.value(roman.charAt(i + 1));

                if (s1 >= s2) {
                    res = res + s1;
                } else {
                    res = res + s2 - s1;
                    i++;
                }
            } else {
                res = res + s1;
            }
        }
    
        if(res < 0){
            return {'msg': 'Roman number doesnt exist'};
        }
        return {'decimal': res};

    }
}