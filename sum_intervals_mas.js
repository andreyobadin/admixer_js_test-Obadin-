function sum_intervals_mas(intervals_mas) {
    var mas = [],
        expand = 0,
        sum = 0;
    for (var i = 0; i < intervals_mas.length; i++) {
        expand = 0;
        for (var n = 0; n < mas.length; n++) {
            if (intervals_mas[i][0] >= mas[n][0] && intervals_mas[i][1] >= mas[n][1] &&
                intervals_mas[i][0] <= mas[n][1]) {
                mas[n][1] = intervals_mas[i][1];
                expand = 1;
                break;
            } else if (intervals_mas[i][0] <= mas[n][0] && intervals_mas[i][1] <= mas[n][1] && intervals_mas[i][1] >= mas[n][0]) {
                mas[n][0] = intervals_mas[i][0];
                expand = 1;
                break;
            } else if (intervals_mas[i][0] >= mas[n][0] && intervals_mas[i][1] <= mas[n][1]) {
                expand = 1;
            }
        }
        if (0 === expand) {
            mas.push(intervals_mas[i]);
        }
    }
    for (i = 0, length = mas.length; i < length; i++) {
        sum += mas[i][1] - mas[i][0];
    }
    return sum;
}